# Releasing Slide Confirm Plus

The fork keeps its built `dist/slide-confirm.js` and source map under version
control. CI verifies builds and uploads artifacts; **there is no automatic release
workflow in this fork**. Publishing and Home Assistant deployment require a
separate review and explicit authorization.

Before publishing:

1. Review the changes and run `npm ci`, install Playwright Chromium, then
   `npm run check` (lint, formatting, types, unit/component tests, build and
   native-browser bundle smoke test). Tests use mocked HA only.
2. Confirm `package.json` and `package-lock.json` versions match the intended
   release tag. The initial v2 fork candidate uses `2.0.0`; suggested tag `v2.0.0`.
3. Publish only after review. Attach `dist/slide-confirm.js` (and optionally its
   map) as release assets, matching `hacs.json`'s filename.
4. Deploy to a dedicated fork path, e.g.
   `/config/www/slide-confirm-plus/slide-confirm.js`, and register only
   `/local/slide-confirm-plus/slide-confirm.js?v=<release>` as a module. Remove
   the official resource instead of registering both implementations.
5. Reload dashboard clients and verify visuals/state rendering without activating
   physical controls. A physical action test requires separate authorization.

Minimum Home Assistant version follows upstream: `2024.8.0` (`perform-action`).
See the README for template trust/CSP caveats and migration behavior.
