import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    if (
        request.nextUrl.pathname.startsWith('/dashboard') ||
        request.nextUrl.pathname.startsWith('/api/mongo')
    ) {
        let cookie = request.cookies.get('admin_token');
        if (cookie) {
            try {
                const { payload } = await jwtVerify(
                    cookie.value,
                    new TextEncoder().encode(process.env.JWT_KEY_SIGNATURE),
                    {
                        algorithms: ['HS256'],
                    }
                );
                if (payload.username == process.env.ADMIN_USER) {
                    // See if the payload decodes as user
                    return NextResponse.next();
                }
            } catch (error) {
                // invalid token
                return NextResponse.rewrite(new URL('/admin', request.url));
            }
        }
        return NextResponse.rewrite(new URL('/admin', request.url));
    }
}
