import { uploadShirt } from '@/lib/mongodb/admin';

export async function POST(req: Request) {
    const form = await req.json();
    console.log(form['name']);
    await uploadShirt(form['name'], form['description'], form['imageURL']); // Using a post request sent from client side, we can call a function that uploads the shirt to MongoDB
}
