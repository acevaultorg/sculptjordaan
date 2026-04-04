import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { alternateRoutes } from "@/config/navigation";

/**
 * Auto-redirect wrong-locale slugs to the correct path.
 * e.g. /en/boek-studio → /en/book-studio, /nl/book-studio → /nl/boek-studio
 * Derived from alternateRoutes so it stays in sync automatically.
 */
const wrongLocaleRedirects: Record<string, string> = {};
for (const [from, to] of Object.entries(alternateRoutes)) {
  const fromIsEN = from.startsWith("/en");
  const toIsEN = to.startsWith("/en");

  if (!fromIsEN && toIsEN) {
    // NL→EN mapping: /nl/boek-studio → /en/book-studio
    // Wrong URL: /en/boek-studio (NL slug under EN prefix) → redirect to /en/book-studio
    const nlSlug = from.replace(/^\/nl/, "");
    const wrongPath = "/en" + nlSlug;
    if (wrongPath !== to) wrongLocaleRedirects[wrongPath] = to;
  } else if (fromIsEN && !toIsEN) {
    // EN→NL mapping: /en/book-studio → /nl/boek-studio
    // Wrong URL: /nl/book-studio (EN slug under NL prefix) → redirect to /nl/boek-studio
    const enSlug = from.replace(/^\/en/, "");
    const wrongPath = "/nl" + enSlug;
    if (wrongPath !== to) wrongLocaleRedirects[wrongPath] = to;
  }
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Redirect sculptjordaan.nl → sculptclub.nl (preserve path + query)
  if (host === "sculptjordaan.nl" || host === "www.sculptjordaan.nl") {
    const url = new URL(request.url);
    url.host = "sculptclub.nl";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Redirect www.sculptclub.nl → sculptclub.nl
  if (host === "www.sculptclub.nl") {
    const url = new URL(request.url);
    url.host = "sculptclub.nl";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;

  // Redirect wrong-locale slugs (e.g. /en/boek-studio → /en/book-studio)
  const redirect = wrongLocaleRedirects[pathname];
  if (redirect) {
    const url = request.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  // Auto-detect language on root path and /start
  // Dutch system language → NL, all others → EN
  if (pathname === "/" || pathname === "/start") {
    const acceptLang = request.headers.get("accept-language") || "";
    const isDutch = acceptLang.startsWith("nl");

    if (pathname === "/") {
      if (!isDutch) {
        const url = request.nextUrl.clone();
        url.pathname = "/en";
        return NextResponse.redirect(url, 302);
      }
    } else {
      // /start → /nl/start or /en/start
      const url = request.nextUrl.clone();
      url.pathname = isDutch ? "/nl/start" : "/en/start";
      return NextResponse.redirect(url, 302);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|images|fonts|manifest.json|api).*)",
};
