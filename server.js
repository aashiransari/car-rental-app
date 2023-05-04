const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const colors = require("colors")
const productRoutes = require('./routes/ProductRoutes')
const path = require('path')

// MONGO DB CONNECTION
connectDB()

// FOR ACESSING DOT ENV FILE
dotenv.config();

// REST APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/api", productRoutes);

// STATIC FILES
if (process.env.NODE_MODE == "production") {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    })
} else {
    app.get("/", (req, res) => {
        res.send("API running..")
    })
}

// APP LISTEN PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`.bgCyan.white);
});
