import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */

  interface Session {
    user: User;
  }

  interface User {
    id: string;
    given_name: string;
    family_name: string;
    role: string;
    preferred_username: string;
    name: string;
    phone_number: string;
  }
}

export interface roles {
  role: "ADMIN" | "CLIENT";
}
