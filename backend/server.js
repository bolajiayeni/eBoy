/* 
SERVER.JS : SIMPLE EXPRESS SERVER TO SERVE UP PRODUCT DATA
*/

// importing modules
import express from "express";
import data from "./data.js";

//Initializing a new express application
const app = express();

//initializing variables
const port = 3500;

// get routes
app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//app.listen
app.listen(port, () => {
  console.log("Server dey run g");
});
