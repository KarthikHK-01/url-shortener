import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

let db;

const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
        db = client.db("url-shortener");
        return db;
    } catch(err) {
        console.log("Some error, check it out", err);
    }
}

const getDB = () => {
    if(!db) throw new Error("No Database available");

    return db;
}

export {connectDB, getDB};