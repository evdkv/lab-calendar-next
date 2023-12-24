import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import vercelPostgresAdapter from "@/lib/vercelPostgresAdapter";

export const authOptions = {
  debug: true,
  secret: process.env.NEXT_AUTH as string,
  adapter: vercelPostgresAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);