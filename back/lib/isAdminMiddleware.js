const isAdmin = () => (req, res, next) => {
  if (req.user && req.user.usertype === "admin") {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  isAdmin,
};
