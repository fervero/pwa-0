const wait = (period) => new Promise((resolve) => setTimeout(resolve, period));

const pingEndpoint = async (req, res) => {
  await wait(1000);
  res.send("pong");
};

module.exports = { pingEndpoint };
