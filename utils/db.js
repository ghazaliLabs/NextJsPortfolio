import { MongoClient } from 'mongodb';

const uri = 'YOUR_MONGODB_CONNECTION_URI'; // Replace with your MongoDB connection URI
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let db;

const connectDatabase = async () => {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db('your-database-name'); // Replace with your database name
};

const getDatabase = () => db;

export { connectDatabase, getDatabase };
