const isAdmin = (redirectRoute = "/") => (req, res, next) => {
  const usertype = req.user.usertype;
  if (usertype === "admin") {
    return next();
  } else {
    return res.redirect(redirectRoute);
  }
};

module.exports = {
  isAdmin
};
