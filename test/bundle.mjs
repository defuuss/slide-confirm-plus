/** Smoke the built single-file artifact with real Chromium mouse input and mocked HA.
 * No HTTP server, HA connection, credentials, or network calls are needed.
 */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
try {
	const page = await browser.newPage({
		viewport: { width: 900, height: 600 },
		reducedMotion: "reduce",
	});
	const errors = [];
	page.on("pageerror", (e) => errors.push(String(e)));
	await page.route("**/*", (route) => route.abort());
	await page.setContent(
		"<style>body{margin:30px} slide-confirm-card{display:block;width:400px}</style>",
	);
	await page.addScriptTag({
		type: "module",
		content: await readFile(new URL("../dist/slide-confirm.js", import.meta.url), "utf8"),
	});
	await page.evaluate(() => customElements.whenDefined("slide-confirm-card"));
	const config = JSON.parse(
		await readFile(new URL("fixtures/plus-legacy-config.json", import.meta.url), "utf8"),
	);
	await page.evaluate(async (config) => {
		window.actions = [];
		window.serviceCalls = 0;
		window.mockHass = (state) => ({
			states: { "switch.entree_haustur_299": { state, attributes: {} } },
			callService: () => {
				window.serviceCalls++;
			},
		});
		const card = (window.card = document.createElement("slide-confirm-card"));
		card.setConfig(config);
		card.hass = window.mockHass("off");
		card.addEventListener("hass-action", (e) => window.actions.push(e.detail));
		document.body.append(card);
		await card.updateComplete;
		const slider = card.shadowRoot.querySelector("slide-confirm-slider");
		await slider.updateComplete;
	}, config);
	const handle = page.locator("slide-confirm-slider .handle");
	const track = page.locator("slide-confirm-slider .track");
	const box = await handle.boundingBox(),
		t = await track.boundingBox();
	assert.equal(box.width, 58);
	assert.equal(box.height, 58);
	assert.equal(t.height, 68);
	assert.equal(box.x - t.x, 5);
	assert.equal(box.y - t.y, 5);
	assert.deepEqual(await page.evaluate(() => [window.actions.length, window.serviceCalls]), [0, 0]);
	// Incomplete native mouse drag springs back with no action.
	await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
	await page.mouse.down();
	await page.mouse.move(t.x + t.width / 2, box.y + box.height / 2, { steps: 12 });
	await page.mouse.up();
	assert.equal(await page.evaluate(() => window.actions.length), 0);
	// State rendering and the actual JS icon are exercised in the minified bundle.
	await page.evaluate(async () => {
		window.card.hass = window.mockHass("on");
		await window.card.updateComplete;
		await window.card.shadowRoot.querySelector("slide-confirm-slider").updateComplete;
	});
	assert.equal(await handle.locator("ha-icon").evaluate((el) => el.icon), "mdi:door-open");
	assert.equal(await page.evaluate(() => window.actions.length), 0);
	// Full mouse drag with browser-native capture emits one delegated event, never callService.
	await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
	await page.mouse.down();
	await page.mouse.move(t.x + t.width - box.width / 2, box.y + box.height / 2, { steps: 20 });
	await page.mouse.up();
	assert.deepEqual(await page.evaluate(() => [window.actions.length, window.serviceCalls]), [1, 0]);
	assert.equal(
		await page.evaluate(() => window.actions[0].config.tap_action.perform_action),
		"switch.toggle",
	);
	assert.equal(
		await page
			.locator("slide-confirm-slider .text")
			.textContent()
			.then((t) => t.trim()),
		"Done!",
	);
	assert.equal(
		await handle.evaluate((el) => getComputedStyle(el.closest(".track"), "::before").opacity),
		"0.96",
	);
	await page.screenshot({ path: "test-results/plus-confirmed.png" });
	await page.waitForTimeout(1850);
	assert.equal(
		await page
			.locator("slide-confirm-slider .text")
			.textContent()
			.then((t) => t.trim()),
		"Slide to Open/Close",
	);
	assert.equal(await page.evaluate(() => window.actions.length), 1);
	assert.deepEqual(errors, []);
	console.log(
		"Built artifact smoke PASS: exact appearance, native mouse cancel/full drag, dynamic state icon, one delegated action, zero service calls, 1800ms reset, no browser errors.",
	);
} finally {
	await browser.close();
}
