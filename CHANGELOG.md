# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased] – Plus 2.0.0

### Plus compatibility and safety

- Incorporate official v2.0.0 (`40e81e44297a806a5fca211013bd609d011f957d`)
  while retaining Plus `appearance` colors, opacity, dimensions, 3D/flat finish,
  and left/center resting positions. The original MIT notice is retained.
- Continue accepting camelCase text/icons, legacy service actions and
  `confirmation_duration` (milliseconds, clamped 500–10,000); native `reset_delay`
  and snake_case keys take precedence. Upgrade retains appearance settings.
- Add trusted `[[[ JavaScript ]]]` icon templates with state updates and static
  error fallbacks. The previous committed fork did not evaluate these strings.
- Abort drags on disabling, config replacement, pointer cancellation/lost capture,
  and disconnect. Reject stale child actions during a pending card render.
- Test the real legacy configuration in Chromium and smoke the minified bundle
  with native mouse capture, mocked HA, one delegated action and zero service calls.
- Document distinct installation path and single resource registration to avoid
  official updates silently replacing the fork. No release/deployment is automated.

### Upstream v2 rewrite

A full rewrite. v1 configs keep working; see
[docs/migration-v1-to-v2.md](docs/migration-v1-to-v2.md).

### Added

- Visual editor built on Home Assistant's `ha-form`, with HA's action picker, per-slider
  panels, add / remove / reorder, and an **Upgrade** button for v1 configs.
- `direction: ltr | rtl` at card and slider level.
- `style:` block for colors and sizes, mapped onto `--slide-confirm-*` CSS custom properties,
  plus CSS shadow parts for card_mod (#7, #5, #10).
- `entity`: default name and icon from the entity (#4).
- `disabled_states`: grey out the slider while the entity is in a given state (#12).
- `reset_delay`, with `0` holding the confirmed state until the entity changes (#13).
- `haptic: true` fires Home Assistant's haptic feedback (PR #19 by @dbuezas).
- A fill that follows the handle while dragging (PR #18 by @dbuezas).
- Keyboard operation and ARIA slider semantics.
- `confirm_action` accepts every Home Assistant action (`perform-action`, `toggle`,
  `more-info`, `navigate`, `url`, `assist`, `fire-dom-event`, `none`) and `floor_id` /
  `label_id` targets.
- `getGridOptions()` for sections dashboards (#3).
- Test suite: Vitest unit tests plus component tests in Chromium; GitHub Actions CI.
- Standalone demo page (`npm run demo`).

### Changed

- All options are `snake_case`: `text_unconfirmed`, `text_confirmed`, `icon_unconfirmed`,
  `icon_confirmed`. The camelCase names are still read and logged as deprecated.
- `confirm_action` uses HA's action shape (`action: perform-action`, `perform_action:`).
  `call-service` / `service:` are still read.
- Actions are executed by Home Assistant via the `hass-action` event, not by the card.
- Only `confirm_action` is required per slider; texts and icons have defaults.
- Confirmation triggers within 2 px of the end instead of requiring the exact last pixel.
- Build moved from Parcel to Vite; Lit 2 → 3; strict TypeScript.

### Fixed

- Handle rendered transparent on Home Assistant 2026 themes because the `--switch-*` variables
  were removed (PR #17 by @dbuezas; v2 uses its own properties with theme fallbacks).
- Multiple sliders nested inside each other due to self-closing custom element tags
  (PR #16 by @Mofeywalker spotted the related attribute-vs-property binding).
- Interrupted touches (`pointercancel`) left the handle stuck mid-track.
- Drag handlers fired twice on touch devices.
- `getConfigElement()` pointed at an element that did not exist; `getStubConfig()` returned
  unused keys.

### Removed

- Dependency on `custom-card-helpers`.
- The `<slide-confirm>` element (now `<slide-confirm-slider>`) and its `call-action` event
  (now `slide-confirmed`).

## [1.0.1] – 2026-03-23

- Service `data` and `device_id` / `area_id` targets (PR #9 by @the-AjK).
- README improvements.

## [1.0.0] – 2024-04-18

- Initial release.
