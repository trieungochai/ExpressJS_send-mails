require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// routes


const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
