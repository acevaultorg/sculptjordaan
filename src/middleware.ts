import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

  // Auto-detect language on root path only
  // Dutch system language → NL (root /), all others → EN (/en)
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    const acceptLang = request.headers.get("accept-language") || "";
    const isDutch = acceptLang.startsWith("nl");

    if (!isDutch) {
      // Non-Dutch speakers get redirected to /en
      const url = request.nextUrl.clone();
      url.pathname = "/en";
      return NextResponse.redirect(url, 302);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|images|fonts|manifest.json|api).*)",
};
