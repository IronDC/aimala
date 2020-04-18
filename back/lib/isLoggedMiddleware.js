const isLoggedIn = () => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).json({ message: "You are not logged in" });
  }
};

const isLoggedOut = () => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
