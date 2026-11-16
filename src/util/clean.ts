/**
 * Strip the empties `ha-form` produces when a field is cleared, so they never
 * reach the user's YAML: `undefined`, `null`, `""`, empty arrays and objects
 * that become empty after cleaning. Arrays keep their order; keys listed in
 * `keep` survive even when empty (the card needs `sliders` to stay a list).
 * Objects explicitly listed in `keepEmptyObjects` also survive when cleaned empty.
 */
export function clean<T>(
	value: T,
	keep: ReadonlySet<string> = new Set(),
	keepEmptyObjects: ReadonlySet<object> = new Set(),
): T | undefined {
	return cleanValue(value, keep, keepEmptyObjects, true) as T | undefined;
}

function cleanValue(
	value: unknown,
	keep: ReadonlySet<string>,
	keepEmptyObjects: ReadonlySet<object>,
	root: boolean,
): unknown {
	if (value === undefined || value === null || value === "") return undefined;

	if (Array.isArray(value)) {
		const items = value
			.map((v) => cleanValue(v, keep, keepEmptyObjects, false))
			.filter((v) => v !== undefined);
		return items.length || root ? items : undefined;
	}

	if (typeof value === "object") {
		const out: Record<string, unknown> = {};
		for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
			const cleaned = cleanValue(v, keep, keepEmptyObjects, false);
			if (cleaned !== undefined) {
				Object.defineProperty(out, k, {
					value: cleaned,
					enumerable: true,
					writable: true,
					configurable: true,
				});
			} else if (keep.has(k) && Array.isArray(v)) {
				out[k] = [];
			}
		}
		return Object.keys(out).length || root || keepEmptyObjects.has(value) ? out : undefined;
	}

	return value;
}
