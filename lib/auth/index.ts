import NextAuth from "next-auth";
import authConfig from "./authConfig";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./prisma";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt"},
  ...authConfig,
});
