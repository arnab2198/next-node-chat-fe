import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = false;
    console.log(request.nextUrl.pathname)

    if (currentUser && !request.nextUrl.pathname.startsWith('/')) {
        return Response.redirect(new URL('/', request.url))
    }

    if (!currentUser && !['/sign-in', '/sign-up', '/forgot-password'].includes(request.nextUrl.pathname)) {
        return Response.redirect(new URL('/sign-in', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}