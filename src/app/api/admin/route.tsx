/*  This file is used for authenticating for the Admin page and giving a token */
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';

export async function POST(req: Request) {
    const form = await req.json();
    if (
        form['username'] == process.env.ADMIN_USER &&
        form['password'] == process.env.ADMIN_PASS
    ) {
        const token = await new SignJWT({
            username: process.env.ADMIN_USER,
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('2h')
            .sign(new TextEncoder().encode(process.env.JWT_KEY_SIGNATURE));

        cookies().set('admin_token', token); // Set the token to the admin's username but JWT encoded so that we can auth them for other admin pages
        return Response.json({ loggedIn: true }); // For the redirect
    }

    return Response.json({ loggedIn: false });
}
