import NextAuth, { User } from "next-auth";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";
import jwt_decode from "jwt-decode";

const handler = NextAuth({
  providers: [
    DuendeIDS6Provider({
      clientId: process.env.IDENTITY_CLIENT_ID + "",
      // clientId: "EShop_Web_React",
      clientSecret: process.env.IDENTITY_CLIENT_SECRET + "",
      // clientSecret: "key_to_encript",
      authorization: {
        params: {
          scope: process.env.IDENTITY_SCOPE + " openid" + " profile",
        },
      },
      // authorization: { params: { scope: "EShop" } },
      issuer: process.env.IDENTITY_HOST + "",
      idToken: true,
      // issuer: "https://localhost:4435",
      name: "duende",
      id: "duende",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile);
      // console.debug(`signIn by user.id: ${user.name}`);
      // console.log(user);

      if (user) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      const decoded: User = await jwt_decode(token.accessToken + "");

      session.user.name = decoded.name;
      session.user.family_name = decoded.family_name;
      session.user.given_name = decoded.given_name;
      session.user.preferred_username = decoded.preferred_username;
      session.user.phone_number = decoded.phone_number;

      console.log(session.user);

      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account && profile) {
        token.accessToken = account.access_token;
        token.id = account.id_token;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
});

export { handler as GET, handler as POST };
