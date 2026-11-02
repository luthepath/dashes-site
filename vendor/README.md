# Vendor

These files are served from the same origin as the site so the globe does not depend on a third-party CDN.

| File | Version | Source | License |
|---|---|---|---|
| `globe.gl-2.46.2.min.js` | 2.46.2 | https://github.com/vasturiano/globe.gl | MIT |
| `topojson-client-3.min.js` | 3.1.0 | https://github.com/topojson/topojson-client | ISC |
| `countries-110m.json` | world-atlas 2 | https://github.com/topojson/world-atlas | ISC |

`globe.gl` bundles three.js and its other runtime dependencies. Keep the version in the filename when updating so the immutable cache header stays safe.
