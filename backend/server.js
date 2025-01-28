const express = require("express");
const app = express();

const cors = require("cors");

const connectDB = require('./dbConnection');
const Ticket = require('./schema');

app.use(cors());
app.use(express.json());

// Connect to your database
connectDB();

// Use the routes correctly
app.use("/api", require("./routes"));  // Correctly include the router module

app.listen(8080, () => {
    console.log("App is listening on http://localhost:8080");
});
