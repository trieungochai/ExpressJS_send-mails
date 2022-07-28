require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const sendEmail = require("./controllers/sendEmail.controller");

// middleware
app.use(express.json());


// routes
app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});

app.get("/send", sendEmail);

// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
