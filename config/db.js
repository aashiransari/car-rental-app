const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require("colors")

dotenv.config();

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
        console.log(("MONGO DB CONNECTED SUCCESS").bgGreen.white)
    })
    connection.on("on", () => {
        console.log("MONGO DB CONNECTION FAILED")
    })
};

module.exports = connectDB;
