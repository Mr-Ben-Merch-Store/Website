import { SignJWT } from 'jose';
import uploadShirt from '@/lib/mongodb';

export async function POST(req: Request) {
    const form = await req.json();

    uploadShirt(form['name'], form['description'], form['imageURL']); // Using a post request sent from client side, we can call a function that uploads the shirt to MongoDB
}
