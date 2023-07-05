const express = require("express");
const path = require("path");
const cors = require("cors");
const { pathToDist } = require("./pathToDist");

const heroku = process.env.ENVIRONMENT === "heroku";

function requireHTTPS(req, res, next) {
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }

  next();
}

const serveStaticFiles = express.static(pathToDist);

const middleware = heroku
  ? [requireHTTPS, serveStaticFiles]
  : [serveStaticFiles, cors()];

module.exports = {
  requireHTTPS,
  middleware,
};
