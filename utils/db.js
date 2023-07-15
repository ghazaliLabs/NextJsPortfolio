import { MongoClient } from 'mongodb';

const uri = 'URI'; // Replace with your MongoDB connection URI
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let db;

const connectDatabase = async () => {
    client = new MongoClient(uri, options);
    console.log("Trying to connect to the database!")
    await client.connect();
    db = client.db('db_name'); // Replace with your database name
    console.log("Connected to database!")
};

const getDatabase = () => db;

export { connectDatabase, getDatabase };
