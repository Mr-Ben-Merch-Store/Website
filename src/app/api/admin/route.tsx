import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
var jwt = require('jsonwebtoken');

export async function POST(req: Request) {
    const form = await req.json();
    if (
        form['username'] == process.env.ADMIN_USER &&
        form['password'] == process.env.ADMIN_PASS
    ) {
        const token = jwt.sign(
            {
                username: process.env.ADMIN_USER,
            },
            process.env.JWT_KEY_SIGNATURE
        );
        cookies().set('admin_token', token); // Set the token to the admin's username but JWT encoded so that we can auth them for other admin pages
        return Response.json({ loggedIn: true });
    }

    return Response.json({ loggedIn: false });
}
