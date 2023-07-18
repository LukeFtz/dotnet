// export { default } from "next-auth/middleware";
import { User, getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { authOptions } from "./app/api/auth/[...nextauth]/route";
import jwt_decode from "jwt-decode";

// import { NextRequest, NextResponse } from "next/server";

import { roles } from "../types/next-auth";
import { getToken } from "next-auth/jwt";
// export async function middleware(request: NextRequest) {
//   return NextResponse.next();
// }

export default withAuth(async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = await getToken({ req: request });
    const role: roles = { role: "ADMIN" };

    if (!token) {
      // const callback = new URL(request.nextUrl.pathname, request.url);
      // signIn("duende", {
      //   redirect: true,
      //   callbackUrl: request.nextUrl.pathname,
      // });
      // const loginUrl = new URL("https://localhost:3050/api/auth/signin/duende", request.url);
      return NextResponse.next();
    }
    const decoded: User = await jwt_decode(token.accessToken + "");
    if (token && role.role === decoded.role) {
      // return NextResponse.rewrite(request.nextUrl);
      return NextResponse.next();
    } else {
      const url = new URL(`/403`, request.url);
      return NextResponse.redirect(url);
    }
  }
});

export const config = { matcher: ["/admin/:path*"] };
