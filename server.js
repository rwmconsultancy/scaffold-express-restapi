const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const conectDB = require('./config/db');
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}.`));
