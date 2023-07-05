const { pathToDist } = require("./pathToDist.js");

const indexEndpoint = (req, res) => {
  res.sendFile("index.html", { root: pathToDist });
};

module.exports = { indexEndpoint };
