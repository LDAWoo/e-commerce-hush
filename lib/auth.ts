import { nanoid } from "@reduxjs/toolkit";
import { AuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

// Mock database (replace with your DB logic)
const users = [{ id: "1", email: "leducanhvu3006@gmail.com", password: "123456" }];

export const authOptions: AuthOptions = {
    secret: process.env.JWT_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string; password: string };

                const user = users.find((user) => user.email === email);
                if (!user) {
                    throw new Error("No user found with this email");
                }

                if (user.password !== password) {
                    throw new Error("Invalid password");
                }
                return user;
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (!account || !profile) return false;
            account.id = profile.sub || nanoid(11);
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id || nanoid(11);
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
    },
};
