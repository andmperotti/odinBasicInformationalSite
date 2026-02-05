const fs = require("node:fs");
const index = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact-me.html");
const errorPage = fs.readFileSync("404.html");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.end(index));
app.get("/about", (req, res) => res.end(about));
app.get("/contact", (req, res) => res.end(contact));
app.use((req, res) => {
  res.status(404).end(errorPage);
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${process.env.PORT}!`);
});
