// Client-only helpers for the Posting Studio (/nl/social). Save the pre-rendered
// slide PNGs to the user's Photos via the Web Share API (iOS share sheet →
// Save to Photos), with per-file-share + download fallbacks. Ported from the
// per-pack public/social/<id>/index.html pages so the unified studio keeps the
// same proven save behaviour.

export interface SlideFile {
  /** public path, e.g. /social/<pack>/tiktok-main-offer.png */
  url: string;
  /** download/share filename, e.g. sculptclub-<pack>-tiktok-slide-1.png */
  filename: string;
}

export type SaveResult = "shared" | "downloaded" | "aborted" | "manual";

type CanShareNav = Navigator & { canShare?: (data: { files: File[] }) => boolean };

async function fetchAsFile(url: string, filename: string): Promise<File> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url} → ${res.status}`);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type || "image/png" });
}

function downloadBlob(file: File): void {
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/** Save all slides at once. Tries a single multi-file share sheet first (best —
 * all slides land in Photos in one tap), then per-file share, then download. */
export async function saveSlidesToPhotos(slides: SlideFile[]): Promise<SaveResult> {
  const nav = navigator as CanShareNav;

  // 1 — one multi-file share sheet (iOS: "Save N Images")
  try {
    const files = await Promise.all(slides.map((s) => fetchAsFile(s.url, s.filename)));
    if (nav.canShare && nav.canShare({ files })) {
      await navigator.share({ files } as ShareData);
      return "shared";
    }
    throw new Error("multi-file share unsupported");
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return "aborted";
  }

  // 2 — share each file, else download each
  try {
    for (const s of slides) {
      const file = await fetchAsFile(s.url, s.filename);
      if (nav.canShare && nav.canShare({ files: [file] })) {
        await navigator.share({ files: [file] } as ShareData);
      } else {
        downloadBlob(file);
      }
    }
    return "downloaded";
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return "aborted";
  }

  // 3 — download fallback
  try {
    for (const s of slides) {
      const file = await fetchAsFile(s.url, s.filename);
      downloadBlob(file);
      await new Promise((r) => setTimeout(r, 350));
    }
    return "downloaded";
  } catch {
    return "manual";
  }
}

/** Save a single slide (share → download fallback). */
export async function saveOneSlide(slide: SlideFile): Promise<SaveResult> {
  const nav = navigator as CanShareNav;
  try {
    const file = await fetchAsFile(slide.url, slide.filename);
    if (nav.canShare && nav.canShare({ files: [file] })) {
      await navigator.share({ files: [file] } as ShareData);
      return "shared";
    }
    downloadBlob(file);
    return "downloaded";
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return "aborted";
    try {
      downloadBlob(await fetchAsFile(slide.url, slide.filename));
      return "downloaded";
    } catch {
      return "manual";
    }
  }
}

/** Copy text to the clipboard with a legacy fallback. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}
