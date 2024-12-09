const bcrypt = require("bcryptjs");
const mongooseUser = require("../models/user");

async function createUser(userParams) {
  const { username, email, password } = userParams;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new mongooseUser({
      username,
      email,
      password: hashedPassword,
    });
    newUser.save();
    return true;
  } catch (error) {
    console.log("create user error", error);
    return false;
  }
}

async function getUser(userParams) {
  const { id } = userParams;
  try {
    const newUser = await mongooseUser.findById(id);
    return newUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getUsers(userParams) {
  try {
    const newUser = await mongooseUser.find();
    return newUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updateUser(userParams) {
  const id = userParams.id;
  const email = userParams.email;
  try {
    const user = await mongooseUser.findById(id);
    user.email = email;
    const userSave = await user.save();
    console.log(userSave);
    return userSave;
  } catch (error) {
    console.log("update user error", error);
    return false;
  }
}

async function deleteUser(userParams) {
  const id = userParams.id;
  try {
    const userDelete = await mongooseUser.findByIdAndDelete(id);
    return userDelete;
  } catch (error) {
    console.log("delete user error", error);
    return false;
  }
}

module.exports = { createUser, updateUser, deleteUser, getUser, getUsers };
