const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "something went wrong", error: err.message });
};
export default errorHandler;
