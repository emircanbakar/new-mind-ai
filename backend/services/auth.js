const bcrypt = require("bcryptjs");
const mongooseUser = require("../models/user");
const jwt = require("jsonwebtoken");

async function login(userParams) {
  const { email, password } = userParams;
  try {
    const user = await mongooseUser.findOne({ email: email });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "invalid username or password" });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token: token, message: "success" };
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { login };
