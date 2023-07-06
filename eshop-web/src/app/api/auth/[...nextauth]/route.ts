import NextAuth from "next-auth";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";

const handler = NextAuth({
  providers: [
    DuendeIDS6Provider({
      clientId: "EShop_Web_React",
      clientSecret: "key_to_encript",
      authorization: { params: { scope: "EShop" } },
      issuer: "https://localhost:4435",
      name: "Sign in",
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
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
