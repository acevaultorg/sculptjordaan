import { blogPosts, type BlogPost } from "@/config/blog-posts";

/**
 * Returns up to `limit` posts related to the given post by tag overlap.
 *
 * Algorithm:
 *  1. Filter to same locale, exclude current slug.
 *  2. Score each remaining post by the count of overlapping tags with the current post.
 *  3. Sort by score descending, tiebreak by newer `publishedAt`.
 *  4. If no posts have any tag overlap (all scores are 0), fall back to the
 *     `limit` most recent posts in the same locale.
 */
export function getRelatedPosts(
  currentSlug: string,
  locale: "nl" | "en",
  limit = 3
): BlogPost[] {
  const current = blogPosts.find(
    (p) => p.slug === currentSlug && p.locale === locale
  );
  const currentTags = new Set(current?.tags ?? []);

  const candidates = blogPosts.filter(
    (p) => p.locale === locale && p.slug !== currentSlug
  );

  const scored = candidates.map((p) => ({
    post: p,
    score: p.tags.reduce((n, t) => (currentTags.has(t) ? n + 1 : n), 0),
  }));

  const anyOverlap = scored.some((s) => s.score > 0);

  if (!anyOverlap) {
    // Fallback: 3 most recent posts in same locale.
    return [...candidates]
      .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
      .slice(0, limit);
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.post.publishedAt < b.post.publishedAt ? 1 : -1;
  });

  return scored.slice(0, limit).map((s) => s.post);
}
