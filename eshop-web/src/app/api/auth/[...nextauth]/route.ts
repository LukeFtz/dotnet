import NextAuth from "next-auth";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserToken } from "@/app/auth/utils/requests";
import { UserToken } from "@/app/auth/utils/type";

const handler = NextAuth({
  providers: [
    DuendeIDS6Provider({
      clientId: process.env.IDENTITY_CLIENT_ID + "",
      clientSecret: process.env.IDENTITY_CLIENT_SECRET + "",
      authorization: { params: { scope: process.env.IDENTITY_SCOPE + "" } },
      issuer: process.env.IDENTITY_HOST + "",
      name: "duende",
    }),
    CredentialsProvider({
      name: "credentials_api",
      credentials: {
        username: {
          label: "username",
          name: "username",
          type: "text",
        },
        password: {
          label: "password",
          name: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = await getUserToken(
          credentials?.username + "",
          credentials?.password + ""
        );
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
