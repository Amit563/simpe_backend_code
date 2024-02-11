import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  //   res.send(res);
  console.log("Hello world");
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("Amitdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
