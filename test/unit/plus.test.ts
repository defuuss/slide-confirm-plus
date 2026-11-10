import { describe, expect, it } from "vitest";
import { migrateConfig, normalizeConfig } from "../../src/config";
import { normalizeAppearance } from "../../src/config/appearance";
import { renderIcon } from "../../src/util/template";
import legacy from "../fixtures/plus-legacy-config.json";

const slider = (extra = {}) =>
	normalizeConfig({ sliders: [{ ...legacy.sliders[0], ...extra }] }).config.sliders[0];

describe("Plus compatibility", () => {
	it("retains the exact legacy appearance, camelCase and target without mutating input", () => {
		const input = structuredClone(legacy);
		const s = normalizeConfig(input).config.sliders[0];
		expect(s.appearance).toEqual(legacy.sliders[0].appearance);
		expect(s.text_unconfirmed).toBe("Slide to Open/Close");
		expect(s.text_confirmed).toBe("Done!");
		expect(s.icon_unconfirmed).toBe(legacy.sliders[0].iconUnconfirmed);
		expect(s.icon_confirmed).toBe(legacy.sliders[0].iconConfirmed);
		expect(s.reset_delay).toBe(1800);
		expect(s.confirm_action).toEqual({
			action: "perform-action",
			perform_action: "switch.toggle",
			target: legacy.sliders[0].confirm_action.target,
		});
		expect(input).toEqual(legacy);
	});
	it("snake_case and reset_delay take precedence including zero", () => {
		const s = slider({
			text_unconfirmed: "New",
			text_confirmed: "Sent",
			icon_unconfirmed: "mdi:new-box",
			icon_confirmed: "mdi:check-all",
			reset_delay: 0,
		});
		expect([
			s.text_unconfirmed,
			s.text_confirmed,
			s.icon_unconfirmed,
			s.icon_confirmed,
			s.reset_delay,
		]).toEqual(["New", "Sent", "mdi:new-box", "mdi:check-all", 0]);
	});
	it.each([
		[0, 500],
		[-10, 500],
		[1800, 1800],
		[50000, 10000],
		["1800", 1800],
		["bad", 1500],
		[Infinity, 1500],
	])("legacy duration %s becomes %s ms", (v, expected) => {
		expect(slider({ confirmation_duration: v }).reset_delay).toBe(expected);
	});
	it("Upgrade preserves appearance/templates, migrates duration, and is idempotent", () => {
		const migrated = migrateConfig(legacy as import("../../src/config").CardConfigInput);
		expect(migrated.sliders![0].appearance).toEqual(legacy.sliders[0].appearance);
		expect(migrated.sliders![0].reset_delay).toBe(1800);
		expect(migrated.sliders![0]).not.toHaveProperty("confirmation_duration");
		expect(normalizeConfig(migrated).config).toEqual(normalizeConfig(legacy).config);
		expect(migrateConfig(migrated)).toEqual(migrated);
	});
	it("sanitizes colors/numbers and preserves legacy center and 3D defaults", () => {
		const a = normalizeAppearance({
			background_color: "red; color:black",
			height: 2,
			handle_size: 1000,
			border_radius: -2,
			background_opacity: 2,
		})!;
		expect(a).toMatchObject({
			background_color: "#1976d2",
			height: 40,
			handle_size: 36,
			border_radius: 0,
			background_opacity: 1,
			handle_position: "center",
			handle_style: "3d",
		});
		expect(() => normalizeAppearance([])).toThrow();
	});
	it("preserves native no-appearance configs", () => {
		expect(slider({ appearance: undefined }).appearance).toBeUndefined();
	});
	it.each([
		"[[[ bad syntax * ]]]",
		"[[[ return states.missing.state; ]]]",
		"[[[ return 3; ]]]",
		"[[[ return ''; ]]]",
		"[[[ throw new Error('oops'); ]]]",
	])("template failure falls back: %s", (value) => {
		expect(renderIcon(value, "mdi:check")).toBe("mdi:check");
	});
	it("static icons pass through and templates receive no hass/service client", () => {
		expect(renderIcon("mdi:lock", "fallback")).toBe("mdi:lock");
		expect(
			renderIcon("[[[ return typeof hass === 'undefined' ? 'mdi:check' : 'bad'; ]]]", "fallback"),
		).toBe("mdi:check");
	});
});
