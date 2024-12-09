const userService = require("../services/user");
const authService = require("../services/auth");

const authController = {
  login: async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "email or password required" });
    }
    try {
      console.log("geldik auth controller")
      const response = await authService.login(req.body);
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },
  register: async (req, res) => {
    try {
      const response = await userService.createUser(req.body);
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },
};

module.exports = authController;
