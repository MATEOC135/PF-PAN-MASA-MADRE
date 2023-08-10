const { User } = require('../db');

const setInitialAdmin = async () => {
  console.log('Checking for admin...');
    const adminCount = await User.count({ where: { admin: true } });
     
     console.log(`Found ${adminCount} admin users.`);
    if (adminCount === 0) {
      console.log('Creating initial admin...');
      await User.create({
        name: "Dario Cordoneda",
        image: "path/to/image.jpg",
        email: "dario_cordoneda@hotmail.com",
        address: "Calle Falsa 123",
        auth0_id:"google-oauth2|107970379460518300168",
        phone: "555-1234",
        token: "alguntoken",
        admin: true
      });
      console.log('Admin created successfully.');
    }
};

const addUser = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, updates) => {
  try {
    await User.update(updates, { where: { id: id } });
    return await User.findByPk(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  setInitialAdmin
};
