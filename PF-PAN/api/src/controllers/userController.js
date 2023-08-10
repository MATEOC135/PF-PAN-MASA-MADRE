const userHandler = require('../handlers/HandlerUser');

const createUser = async (req, res) => {
  try {
   
    const user = await userHandler.addUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).send({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userHandler.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userHandler.updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser
};
