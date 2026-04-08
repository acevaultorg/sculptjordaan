/**
 * Reading time helpers — used by blog posts to display "X min read"
 * and to feed wordCount + speakable hints into BlogPosting JSON-LD.
 *
 * Avg adult silent reading speed in mixed prose: ~225 WPM.
 * We round up so a 5-min read isn't presented as 4.
 */

const WORDS_PER_MINUTE = 225;

export type ReadingStats = {
  words: number;
  minutes: number;
};

export function readingTime(words: number): ReadingStats {
  const safe = Math.max(1, words);
  return {
    words: safe,
    minutes: Math.max(1, Math.ceil(safe / WORDS_PER_MINUTE)),
  };
}

export function formatReadingTime(words: number, locale: "nl" | "en"): string {
  const { minutes } = readingTime(words);
  return locale === "nl" ? `${minutes} min lezen` : `${minutes} min read`;
}
