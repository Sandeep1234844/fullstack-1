// adminCheck.js
function adminCheck(req, res, next) {
  const adminCheck = require("./middleware/adminCheck");

  if (role === "admin") {
    return next(); // allow request to continue
  } else {
    return res.status(403).json({ message: "Access Denied" });
  }
}

module.exports = adminCheck;