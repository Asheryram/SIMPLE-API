import userDao from "../models/persistence/user.dao.js";

const getUser = (userId) =>  userDao.get(userId);

const getAllUsers = () =>  userDao.getAll();

const removeUser = (userId) =>  userDao.remove(userId);

const updateUser = (userId, details) =>  userDao.update(userId, details);

const addUser = (details) =>  userDao.insert(details);


export default {
  addUser,
  getUser,
  getAllUsers,
  updateUser,
  removeUser,
};
