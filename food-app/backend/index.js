require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoDB = require("./db");
mongoDB();
//necessary to import for corss origin with mongoDB
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// json is used as we are fetching data we wrote in body of ThunderClient in CreateUser
app.use(express.json());

// console.log(process.env.SECRET_KEY);
// app.use is used as middleware in every request to server made with first param as path
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.get("/", (req, res) => {
  // if runs then express is working
  res.send("Hello World!    --------");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
