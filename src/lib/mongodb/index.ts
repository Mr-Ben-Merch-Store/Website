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
let clientConnection: any;

declare global {
    var __mongoClientProcess: any; // For typescript typing, unrelated to anything else
}

if (process.env.MONGO_USER && process.env.MONGO_PASS) {
    if (!global.__mongoClientProcess) {
        global.__mongoClientProcess = client.connect();
        clientConnection = global.__mongoClientProcess;
    } else {
        clientConnection = global.__mongoClientProcess;
        console.log(typeof global.__mongoClientProcess);
    }
} else {
    console.log('Not connected to Mongo. Keys not set.');
}

export default clientConnection;
