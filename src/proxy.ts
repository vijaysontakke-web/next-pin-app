import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    // Example: Redirect /old-route to /learn/routing
    if (request.nextUrl.pathname.startsWith('/old-route')) {
        return NextResponse.redirect(new URL('/learn/routing', request.url));
    }

    // Example: Set a custom header for all responses
    const response = NextResponse.next();
    response.headers.set('x-learning-app', 'true');
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
