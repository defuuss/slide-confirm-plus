import type { HomeAssistant, HassEntity } from "../types/home-assistant";

/** Trusted dashboard JavaScript only, never action fields or entity state strings.
 * This is not a sandbox; only install config from people you trust.
 * No hass/callService reference is supplied. Errors/missing state use a static fallback.
 */
export function renderIcon(
	value: string,
	fallback: string,
	hass?: HomeAssistant,
	entity?: HassEntity,
): string {
	if (!value.trim().startsWith("[[[") || !value.trim().endsWith("]]]")) return value;
	try {
		const body = value.trim().slice(3, -3);
		const result: unknown = new Function("states", "entity", `"use strict"; ${body}`)(
			hass?.states ?? {},
			entity,
		);
		return typeof result === "string" && result.trim() ? result : fallback;
	} catch {
		return fallback;
	}
}
