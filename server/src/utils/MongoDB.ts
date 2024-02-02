import { MongoClient } from "mongodb";

const DATABASE_URL = process.env.MONGODB_URL;
const BATABASE_NAME = process.env.MONGODB_NAME || "test";

if (!DATABASE_URL) throw new Error("Define DATABASE_URL in .env!");

const client = new MongoClient(DATABASE_URL);

export const database = client.db(BATABASE_NAME);

export const connectToDatabase = client.connect();
