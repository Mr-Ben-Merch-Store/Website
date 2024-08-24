'use server';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@storeproducts.r4z7wse.mongodb.net/?retryWrites=true&w=majority&appName=StoreProducts`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
// Connect the client to the server	(optional starting in v4.7)
let clientConnection = client.connect();

export default clientConnection;
