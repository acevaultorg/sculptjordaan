import OgImage from "./opengraph-image";

// Re-uses opengraph-image; runtime must match (edge — Satori can't load
// WOFF2 fonts so we fall back to system sans-serif at edge).
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "SculptClub — Private gym in Amsterdam Jordaan · €12/hour studio rental · 0% commission";

export default OgImage;
