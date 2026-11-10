/** Plus v1 appearance remains a supported API, independent of upstream style. */
export interface AppearanceConfig {
	background_color?: string;
	handle_color?: string;
	handle_style?: "flat" | "3d";
	handle_position?: "left" | "center";
	background_opacity?: number;
	text_color?: string;
	confirmed_background_color?: string;
	confirmed_background_opacity?: number;
	confirmed_handle_color?: string;
	height?: number;
	handle_size?: number;
	border_radius?: number;
}

const number = (value: unknown, fallback: number, min: number, max: number): number => {
	const n = typeof value === "number" ? value : Number(value);
	return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
};
const color = (v: unknown, fallback: string): string =>
	typeof v === "string" && /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)
		? v
		: fallback;

export function normalizeAppearance(raw: unknown): AppearanceConfig | undefined {
	if (raw === undefined || raw === null) return undefined;
	if (typeof raw !== "object" || Array.isArray(raw))
		throw new Error("appearance must be an object");
	const a = raw as AppearanceConfig;
	const height = number(a.height, 56, 40, 120);
	return {
		background_color: color(a.background_color, "#1976d2"),
		handle_color: color(a.handle_color, "#ffffff"),
		text_color: color(a.text_color, "#ffffff"),
		confirmed_background_color: color(a.confirmed_background_color, "#2e7d32"),
		confirmed_handle_color: color(a.confirmed_handle_color, "#ffffff"),
		background_opacity: number(a.background_opacity, 0.92, 0, 1),
		confirmed_background_opacity: number(a.confirmed_background_opacity, 0.96, 0, 1),
		height,
		handle_size: Math.min(number(a.handle_size, 48, 32, 100), height - 4),
		border_radius: number(a.border_radius, Math.round(height / 2), 0, 60),
		handle_style: a.handle_style === "flat" ? "flat" : "3d",
		handle_position: a.handle_position === "left" ? "left" : "center",
	};
}

/** Legacy confirmation_duration clamps to 500..10000ms; reset_delay stays upstream-native. */
export const legacyDuration = (v: unknown): number => number(v, 1500, 500, 10000);

export function appearanceVars(a?: AppearanceConfig): Record<string, string> {
	if (!a) return {};
	return {
		"--slide-confirm-track-color": a.background_color!,
		"--slide-confirm-handle-color": a.handle_color!,
		"--slide-confirm-text-color": a.text_color!,
		"--slide-confirm-confirmed-color": a.confirmed_background_color!,
		"--slide-confirm-confirmed-handle-color": a.confirmed_handle_color!,
		"--slide-confirm-track-opacity": String(a.background_opacity),
		"--slide-confirm-confirmed-track-opacity": String(a.confirmed_background_opacity),
		"--slide-confirm-track-height": `${a.height}px`,
		"--slide-confirm-handle-size": `${a.handle_size}px`,
		"--slide-confirm-border-radius": `${a.border_radius}px`,
	};
}
