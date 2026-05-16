import OgImage from "./opengraph-image";

// Runtime must match opengraph-image (nodejs) since OG image reads font files
// via node:fs/promises — keeping runtime in sync prevents the
// "Native module not found: node:fs/promises" build error that fails the
// whole production build (verified 2026-05-16 — first deploy of the brand-font
// OG image ERRORed because this file still had runtime="edge").
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "SculptClub — Private gym in Amsterdam Jordaan · €12/hour studio rental · 0% commission";

export default OgImage;
