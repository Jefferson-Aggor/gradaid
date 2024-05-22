import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import { UserRole } from "@prisma/client"
import { getUserById } from "@/data/user"

export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/api/login/',
        error: '/api/error/'
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub)
            if (!existingUser) return token
            token.role = existingUser?.role
            return token
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }
            return session
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
})