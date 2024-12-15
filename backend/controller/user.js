const userService = require("../services/user");
const kafka = require('../utils/kafka')

const userController = {
  updateUser: async (req, res) => {
    try {
      const response = await userService.updateUser(req.body);
      console.log(response, "result");
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const response = await userService.deleteUser(req.params);
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },
  getUsers: async (req, res) => {
    try {
      const response = await userService.getUsers();
      console.log(response, ` result ${response} `);
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },
  getUser: async (req, res) => {
    try {
      const response = await userService.getUser(req.params);
      console.log(response, "result");
      res.status(200).send({ response: response });
    } catch (error) {
      console.log("error", error);
    }
  },

  createOrder: async (req, res) => {
    try {
      await kafka.sendMessage('test2', 'test3')
      res.status(200).send({ response: [] });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
