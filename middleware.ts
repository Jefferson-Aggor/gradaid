import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { protectPrefix, authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth

    const isProtectedRoute = nextUrl.pathname.startsWith(protectPrefix)

    if (isProtectedRoute && !isLoggedIn) {
        return Response.redirect(new URL('/api/login', nextUrl))
    }


})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}


