import { NextRequest } from "next/server";
import speakeasy from "speakeasy";

import { getServerSession } from "next-auth/next"

export async function POST(req, res) {

    const { secret, token } = await req.json();

    const session = await getServerSession(authOptions)

    // Here, we have to implement 2 strategies
    // 1. Verifying during LOGIN
    // 2. Enabling 2FA for the first time

    // 1. Verifying during LOGIN
    if (!session) {

        let decrypted_secret = await decrypt(secret)  // Have a function to decrypt your secret key

        const verified = speakeasy.totp.verify({
            secret: decrypted_secret, // Secret Key
            encoding: "base32",
            token: token,   // OTP Code
        });

        return Response.json({ verified });

    } else {

    // 2. Enabling 2FA for the first time
        const verified = speakeasy.totp.verify({
            secret: secret, // Secret Key
            encoding: "base32",
            token: token,   // OTP Code
        });

        if (verified) {
            // save the secret in your database
            // Don't forget to encrypt it
        }

        return Response.json({ verified });

    }

}