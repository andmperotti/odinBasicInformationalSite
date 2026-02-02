const http = require("node:http");
const axios = require("axios");
const fs = require("node:fs");
const index = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact-me.html");
const error = fs.readFileSync("404.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(index);
  } else if (req.url === "/about") {
    res.end(about);
  } else if (req.url === "/contact-me") {
    res.end(contact);
  } else {
    res.end(error);
  }
});

server.listen(8080);
