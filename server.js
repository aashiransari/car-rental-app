const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const colors = require("colors")
const productRoutes = require('./routes/productRoutes');

// MONGO DB CONNECTION
connectDB()

// FOR ACESSING DOT ENV FILE
dotenv.config();

// REST APP
const app = express();
app.use(bodyParser.json());
app.use(cors());

// APP LISTEN PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`.bgCyan.white);
});
