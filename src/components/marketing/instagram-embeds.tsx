"use client";

import { useEffect } from "react";

/**
 * Official Instagram post/reel embeds. Renders the standard `blockquote`
 * markup and loads Instagram's `embed.js` on mount, then calls
 * `window.instgrm.Embeds.process()` to turn each blockquote into the real
 * post/reel (playable video for reels). If the script is blocked or fails,
 * each blockquote degrades to a plain link to the post (graceful fallback).
 *
 * Instagram is allowlisted in the CSP (next.config.ts): script-src +
 * frame-src + img-src + connect-src include www.instagram.com /
 * *.cdninstagram.com. Permalinks may be full URLs (with or without the
 * username) — embed.js resolves them.
 */
declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";

export function InstagramEmbeds({
  urls,
  linkLabel = "View on Instagram",
  className,
}: {
  urls: string[];
  linkLabel?: string;
  className?: string;
}) {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process();
    if (window.instgrm) {
      process();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", process);
      return;
    }
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.addEventListener("load", process);
    document.body.appendChild(s);
  }, []);

  return (
    <div className={className}>
      {urls.map((u) => (
        <blockquote
          key={u}
          className="instagram-media"
          data-instgrm-permalink={u}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            margin: "0 auto",
            maxWidth: 400,
            width: "100%",
            minWidth: 0,
            borderRadius: "1rem",
          }}
        >
          {/* Fallback shown until Instagram's embed.js swaps in the real reel
              (or permanently, if a browser blocks the script) — styled as a
              tappable reel card so the section always looks intentional. */}
          <a
            href={u}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              aspectRatio: "4 / 5",
              width: "100%",
              borderRadius: "1rem",
              background: "linear-gradient(135deg, #EF5012 0%, #b93a0c 100%)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              textAlign: "center",
              padding: "1.25rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.18)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {linkLabel}
          </a>
        </blockquote>
      ))}
    </div>
  );
}
