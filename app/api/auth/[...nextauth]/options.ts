import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from 'next-auth';
import { Users } from "../../seed";

export const Options: NextAuthOptions = {
    // pages: {
    //     signIn: '/login'
    // },

    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", placeholder: "Enter Email" },
                password: { label: "Password", placeholder: 'Enter Password' }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) return null

                const user = await Users.find((item) => item.email === credentials.email);

                if (user?.password === credentials.password) {
                    return user
                }

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile(profile) {
                return {
                    ...profile,
                    id: profile.sub
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) { return true },
        async jwt({ token, user }) { return token },
        async session({ session, user, token }) { return session },
    }
}