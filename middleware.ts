import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
    const isAuthenticated = false;
    const authRoutes = ['/sign-in', '/sign-up', '/forgot-password'];
    const currentPath = request.nextUrl.pathname;

    if (currentPath.toString() === '/' && !isAuthenticated) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (authRoutes.includes(currentPath) && isAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}