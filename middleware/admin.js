const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    const user = await User.findById(req.user.id).select("-password");
    if (!user.admin) {
      return res.status(401).json({ msg: "Not admin, authorization denied" });
    }
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
