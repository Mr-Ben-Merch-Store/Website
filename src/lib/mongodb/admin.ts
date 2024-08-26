/* For the admin mongoDB connection */

import clientConnection from '.';

let client;
let db: any;
let shirts: any; // Typescript gets annoyed when I change type to "object" even though that's literally what it is
async function init() {
    try {
        client = await clientConnection;
        db = await client.db('Products');
        shirts = db.collection('shirts');
        console.log(typeof shirts);
    } catch (error) {
        throw new Error(String(error));
    }
}

export async function getShirts() {
    if (!shirts) {
        await init();
    }

    const result = await shirts.find({}).toArray();
    // console.log(typeof window === 'undefined');  // Checks if running on server, returns True
    return result;
}

export async function uploadShirt(name: String, description: String, imageURL: String) {
    if (!shirts) {
        await init();
    }

    return shirts.insertOne({ _id: name, description: description, imageURL: imageURL });
}
