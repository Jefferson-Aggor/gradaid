import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "@/schemas";
import bcryptjs from 'bcryptjs'
import { getUserByEmail } from "@/data/user";



export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcryptjs.compare(password, user.password)

                    if (passwordsMatch) return user;
                }

                return null
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })

    ]
} satisfies NextAuthConfig