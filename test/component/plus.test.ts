import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import type { SlideConfirmCard } from "../../src/card";
import type { SlideConfirmSlider } from "../../src/slider";
import type { SlideConfirmCardEditor } from "../../src/editor";
import { normalizeConfig } from "../../src/config";
import type { HomeAssistant } from "../../src/types/home-assistant";
import legacy from "../fixtures/plus-legacy-config.json";

beforeAll(async () => {
	await import("../../src/index");
});
const nodes: HTMLElement[] = [];
afterEach(() => {
	nodes.splice(0).forEach((n) => n.remove());
	vi.useRealTimers();
});
const callService = vi.fn();
const hass = (state = "off") =>
	({
		states: {
			"switch.entree_haustur_299": {
				state,
				attributes: {},
				entity_id: "switch.entree_haustur_299",
			},
		},
		callService,
	}) as unknown as HomeAssistant;
async function mount(extra: Record<string, unknown> = {}) {
	const card = document.createElement("slide-confirm-card") as SlideConfirmCard;
	card.style.cssText = "display:block;width:400px";
	card.setConfig({ ...legacy, sliders: [{ ...legacy.sliders[0], ...extra }] });
	card.hass = hass();
	const actions: CustomEvent[] = [];
	card.addEventListener("hass-action", (e) => actions.push(e as CustomEvent));
	document.body.append(card);
	nodes.push(card);
	await card.updateComplete;
	const slider = card.shadowRoot!.querySelector("slide-confirm-slider") as SlideConfirmSlider;
	await slider.updateComplete;
	const track = slider.shadowRoot!.querySelector(".track") as HTMLElement;
	const handle = slider.shadowRoot!.querySelector(".handle") as HTMLElement;
	const root = slider.shadowRoot!.querySelector(".slider") as HTMLElement;
	const pointer = (type: string, end = false, id = 1) => {
		const t = track.getBoundingClientRect(),
			h = handle.getBoundingClientRect();
		handle.dispatchEvent(
			new PointerEvent(type, {
				clientX: end ? t.right - h.width / 2 : h.left + h.width / 2,
				pointerId: id,
				pointerType: "touch",
				bubbles: true,
				composed: true,
				cancelable: true,
			}),
		);
	};
	const confirm = async () => {
		pointer("pointerdown");
		pointer("pointermove", true);
		pointer("pointerup", true);
		await slider.updateComplete;
	};
	return { card, slider, root, track, handle, pointer, actions, confirm };
}

describe("Plus real-browser appearance and action safety", () => {
	it("renders exact installed appearance and equal 5px inset without fading text/handle", async () => {
		const { root, track, handle } = await mount();
		expect(track.getBoundingClientRect().height).toBe(68);
		expect(handle.getBoundingClientRect().width).toBe(58);
		expect(handle.getBoundingClientRect().left - track.getBoundingClientRect().left).toBe(5);
		expect(handle.getBoundingClientRect().top - track.getBoundingClientRect().top).toBe(5);
		expect(getComputedStyle(track).borderRadius).toBe("34px");
		expect(getComputedStyle(track, "::before").backgroundColor).toBe("rgb(13, 71, 161)");
		expect(getComputedStyle(track, "::before").opacity).toBe("0.18");
		expect(getComputedStyle(handle).backgroundImage).toContain("radial-gradient");
		expect(root.style.getPropertyValue("--slide-confirm-handle-color")).toBe("#38bdf8");
		expect(getComputedStyle(handle).opacity).toBe("1");
		expect(getComputedStyle(root.querySelector(".text")!).color).toBe("rgb(255, 255, 255)");
	});
	it("emits exactly one HA delegated action and holds success for 1800ms, not seconds", async () => {
		vi.useFakeTimers();
		callService.mockClear();
		const { slider, root, track, handle, actions, confirm } = await mount();
		expect(actions).toHaveLength(0);
		await confirm();
		await confirm();
		expect(actions).toHaveLength(1);
		expect(actions[0].detail).toEqual({
			action: "tap",
			config: {
				tap_action: {
					action: "perform-action",
					perform_action: "switch.toggle",
					target: { entity_id: "switch.entree_haustur_299" },
				},
			},
		});
		expect(callService).not.toHaveBeenCalled();
		expect(slider.confirmed).toBe(true);
		expect(root.querySelector(".text")!.textContent?.trim()).toBe("Done!");
		expect(getComputedStyle(track, "::before").backgroundColor).toBe("rgb(4, 120, 87)");
		expect(getComputedStyle(track, "::before").opacity).toBe("0.96");
		expect(root.style.getPropertyValue("--slide-confirm-confirmed-handle-color")).toBe("#ecfdf5");
		expect(getComputedStyle(handle).backgroundImage).toContain("radial-gradient");
		vi.advanceTimersByTime(1799);
		await slider.updateComplete;
		expect(slider.confirmed).toBe(true);
		vi.advanceTimersByTime(1);
		await slider.updateComplete;
		expect(slider.confirmed).toBe(false);
		expect(actions).toHaveLength(1);
	});
	it("updates both legacy dynamic icons with HA states without emitting an action", async () => {
		const { card, slider, handle, actions } = await mount();
		const icon = () => (handle.querySelector("ha-icon") as HTMLElement & { icon: string }).icon;
		expect(icon()).toBe("mdi:door-closed");
		card.hass = hass("on");
		await card.updateComplete;
		await slider.updateComplete;
		expect(icon()).toBe("mdi:door-open");
		expect(actions).toHaveLength(0);
		slider.config = { ...slider.config, icon_unconfirmed: "[[[ return states.missing.state; ]]]" };
		await slider.updateComplete;
		expect(icon()).toBe("mdi:chevron-right");
	});
	it("supports flat and centered handles and per-slider style overrides", async () => {
		const { track, handle } = await mount({
			appearance: {
				...legacy.sliders[0].appearance,
				handle_style: "flat",
				handle_position: "center",
			},
			style: { handle_size: 40, track_color: "rgb(255, 0, 0)" },
		});
		const t = track.getBoundingClientRect(),
			h = handle.getBoundingClientRect();
		expect(h.width).toBe(40);
		expect(h.left - t.left).toBe((t.width - 40) / 2);
		expect(getComputedStyle(handle).backgroundImage).toBe("none");
		expect(getComputedStyle(track, "::before").backgroundColor).toBe("rgb(255, 0, 0)");
	});
	it.each(["left", "center"])(
		"%s handle remains under pointer during native geometry movement",
		async (position) => {
			const { pointer, handle, track, slider, actions } = await mount({
				appearance: { ...legacy.sliders[0].appearance, handle_position: position },
			});
			pointer("pointerdown");
			pointer("pointermove", true);
			await slider.updateComplete;
			expect(Math.round(handle.getBoundingClientRect().right)).toBe(
				Math.round(track.getBoundingClientRect().right),
			);
			pointer("pointerup", true);
			await slider.updateComplete;
			expect(actions).toHaveLength(1);
		},
	);
	it.each(["pointercancel", "lostpointercapture"])(
		"%s at the end never executes an action",
		async (type) => {
			const { pointer, slider, actions } = await mount();
			pointer("pointerdown");
			pointer("pointermove", true);
			pointer(type, true);
			pointer("pointerup", true);
			await slider.updateComplete;
			expect(actions).toHaveLength(0);
			expect(slider.progress).toBe(0);
		},
	);
	it("Plus RTL keeps the correct inset and follows a leftward pointer to confirm", async () => {
		const { handle, track, slider, actions } = await mount({ direction: "rtl" });
		const t = track.getBoundingClientRect(),
			h = handle.getBoundingClientRect();
		expect(t.right - h.right).toBe(5);
		const send = (type: string, x: number) =>
			handle.dispatchEvent(
				new PointerEvent(type, { clientX: x, pointerId: 9, pointerType: "touch", bubbles: true }),
			);
		send("pointerdown", h.left + h.width / 2);
		send("pointermove", t.left + h.width / 2);
		await slider.updateComplete;
		expect(Math.round(handle.getBoundingClientRect().left)).toBe(Math.round(t.left));
		send("pointerup", t.left + h.width / 2);
		await slider.updateComplete;
		expect(actions).toHaveLength(1);
	});

	it("a centered handle can move backward to zero without snapping to center or confirming", async () => {
		const { handle, track, slider, actions } = await mount({
			appearance: { ...legacy.sliders[0].appearance, handle_position: "center" },
		});
		const t = track.getBoundingClientRect(),
			h = handle.getBoundingClientRect();
		const send = (type: string, x: number) =>
			handle.dispatchEvent(
				new PointerEvent(type, { clientX: x, pointerId: 9, pointerType: "touch", bubbles: true }),
			);
		send("pointerdown", h.left + h.width / 2);
		send("pointermove", t.left + h.width / 2);
		await slider.updateComplete;
		expect(Math.round(handle.getBoundingClientRect().left)).toBe(Math.round(t.left));
		send("pointerup", t.left + h.width / 2);
		await slider.updateComplete;
		expect(actions).toHaveLength(0);
		expect(slider.progress).toBe(0);
	});

	it("pointerup without active drag and mismatched pointers never execute", async () => {
		const { pointer, actions } = await mount();
		pointer("pointerup", true);
		pointer("pointerdown");
		pointer("pointerup", true, 2);
		expect(actions).toHaveLength(0);
	});
	it("config replacement during drag invalidates the gesture even before Lit updates", async () => {
		const { pointer, slider, actions } = await mount();
		pointer("pointerdown");
		pointer("pointermove", true);
		slider.config = { ...slider.config, text_unconfirmed: "Changed" };
		pointer("pointerup", true);
		await slider.updateComplete;
		expect(actions).toHaveLength(0);
		expect(slider.progress).toBe(0);
	});
	it("keyboard progress cannot carry into a synchronously replaced config", async () => {
		const { handle, slider, actions } = await mount();
		const key = () =>
			handle.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
		for (let i = 0; i < 9; i++) key();
		slider.config = { ...slider.config, text_unconfirmed: "Changed" };
		key();
		expect(actions).toHaveLength(0);
		await slider.updateComplete;
		expect(slider.confirmed).toBe(false);
	});

	it("card config replacement rejects a stale child gesture before render", async () => {
		const { pointer, card, actions } = await mount();
		pointer("pointerdown");
		pointer("pointermove", true);
		card.setConfig({ sliders: [{ confirm_action: { action: "none" } }] });
		pointer("pointerup", true);
		expect(actions).toHaveLength(0);
		await card.updateComplete;
	});

	it("disabling during drag invalidates the gesture even before Lit updates", async () => {
		const { pointer, slider, actions } = await mount();
		pointer("pointerdown");
		pointer("pointermove", true);
		slider.disabled = true;
		pointer("pointerup", true);
		await slider.updateComplete;
		expect(actions).toHaveLength(0);
		expect(slider.progress).toBe(0);
	});
	it("disabled entity state updates cancel a moving slider without executing", async () => {
		const { pointer, slider, actions } = await mount({
			entity: "switch.entree_haustur_299",
			disabled_states: ["on"],
		});
		pointer("pointerdown");
		pointer("pointermove", true);
		slider.hass = hass("on");
		await slider.updateComplete;
		pointer("pointerup", true);
		expect(actions).toHaveLength(0);
	});
	it("disconnect cancels drag and a pending confirmation timer", async () => {
		vi.useFakeTimers();
		const { pointer, slider, card, actions, confirm } = await mount();
		pointer("pointerdown");
		pointer("pointermove", true);
		card.remove();
		pointer("pointerup", true);
		expect(actions).toHaveLength(0);
		document.body.append(card);
		await card.updateComplete;
		await slider.updateComplete;
		await confirm();
		expect(actions).toHaveLength(1);
		card.remove();
		expect(vi.getTimerCount()).toBe(0);
		expect(slider.confirmed).toBe(false);
	});
	it("editor upgrade and later edits preserve appearance, templates and duration", async () => {
		const editor = document.createElement("slide-confirm-card-editor") as SlideConfirmCardEditor;
		editor.setConfig(structuredClone(legacy));
		document.body.append(editor);
		nodes.push(editor);
		await editor.updateComplete;
		(editor.shadowRoot!.querySelector(".upgrade") as HTMLElement).click();
		await editor.updateComplete;
		expect(editor.config!.sliders![0].appearance).toEqual(legacy.sliders[0].appearance);
		expect(editor.config!.sliders![0].reset_delay).toBe(1800);
		const form = editor.shadowRoot!.querySelector("ha-form.slider-form") as HTMLElement & {
			data: Record<string, unknown>;
		};
		form.dispatchEvent(
			new CustomEvent("value-changed", { detail: { value: { ...form.data, name: "Edited" } } }),
		);
		await editor.updateComplete;
		expect(editor.config!.sliders![0].appearance).toEqual(legacy.sliders[0].appearance);
		expect(normalizeConfig(editor.config).config.sliders[0].icon_unconfirmed).toBe(
			legacy.sliders[0].iconUnconfirmed,
		);
	});
});
