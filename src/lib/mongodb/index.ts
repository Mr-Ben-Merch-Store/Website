const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

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

if (!global.__mongoClientProcess) {
    global.__mongoClientProcess = client.connect();
    clientConnection = global.__mongoClientProcess;
} else {
    clientConnection = global.__mongoClientProcess;
    console.log(typeof global.__mongoClientProcess);
}

export default clientConnection;
