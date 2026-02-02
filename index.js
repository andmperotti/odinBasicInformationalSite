const http = require("node:http");
const axios = require("axios");
const fs = require("node:fs");
const index = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact-me.html");
const error = fs.readFileSync("404.html");
