const express = require("express");
const { middleware } = require("./modules/middleware");
const { indexEndpoint } = require("./modules/indexEndpoint");
const app = express();
console.log("starting server");

for (const fn of middleware) {
  app.use(fn);
}

app.get("/*", indexEndpoint);

const port = process.env.PORT || 8080;

console.log(`Listening on port ${port}`);

app.listen(port);
