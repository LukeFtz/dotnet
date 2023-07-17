// export { default } from "next-auth/middleware";
// import { getServerSession } from "next-auth";
// import { signIn } from "next-auth/react";
// import { NextRequest, NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";
// import { authOptions } from "./app/api/auth/[...nextauth]/route";

import { NextRequest, NextResponse } from "next/server";

// import { roles } from "../types/next-auth";
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// export default withAuth(
//   async function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith("/admin")) {
//       // const session = await getServerSession(authOptions);

//       const role: roles = { role: "ADMIN" };

//       // if (!session) {
//       //   signIn("duende", {
//       //     redirect: true,
//       //   });
//       // }
//       if (true) {
//         console.log(request.nextUrl);
//         return NextResponse.rewrite(request.nextUrl);
//       }

//       // const loginUrl = new URL("/api/auth/signin/duende", request.url);
//       // return NextResponse.redirect(loginUrl);
//       // return NextResponse.next;
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

// export const config = { matcher: ["/admin/:path*"] };
