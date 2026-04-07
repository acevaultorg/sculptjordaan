import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/sections/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getRelatedPosts } from "@/lib/related-posts";

interface RelatedPostsProps {
  currentSlug: string;
  locale: "nl" | "en";
}

export function RelatedPosts({ currentSlug, locale }: RelatedPostsProps) {
  const posts = getRelatedPosts(currentSlug, locale, 3);
  if (posts.length === 0) return null;

  const title = locale === "nl" ? "Meer lezen" : "Read more";
  const cta = locale === "nl" ? "Lees verder" : "Read more";

  return (
    <Section wide>
      <SectionHeader title={title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group block focus:outline-none"
          >
            <Card className="h-full transition-colors group-hover:bg-muted">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-brand transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                  {cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
