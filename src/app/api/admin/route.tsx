import { cookies } from 'next/headers';

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
        cookies().set('admin_token', token);
        return Response.json({ loggedIn: true }); // return a token to auth for admin
    }

    return Response.json({ token: 0 });
}
