const notFoundMiddleware = (req, res) => {
  return res.status(404).send("This route does not exist");
};

module.exports = notFoundMiddleware;
