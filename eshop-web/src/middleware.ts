// export { default } from "next-auth/middleware";
// import { signIn } from "next-auth/react";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith("/admin")) {
  // This logic is only applied to /about
  // signIn("duende", {
  //   redirect: true,
  //   callbackUrl: "https://localhost:3050/",
  // });
  //   }
}

// export const config = { matcher: ["/admin/:path*"] };
