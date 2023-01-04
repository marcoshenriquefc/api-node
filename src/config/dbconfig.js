import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura-study:alura@alura-study.4w0bgvi.mongodb.net/alura-node");

const db = mongoose.connection;

export default db;