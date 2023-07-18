import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

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
    token: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    accessToken?: string;
  }
}

export interface roles {
  role: "ADMIN" | "CLIENT";
}
