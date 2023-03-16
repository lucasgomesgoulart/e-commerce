const userService = require('../services/userService');

const UserController = {

  async create(req, res) {
    const user = req.body
    try {
      const newUser = await userService.createUser(user);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findById(req, res) {
    try {
      const id_user = req.params.id;
      const user = await userService.findUserById(id_user);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findUserRestaurants(req, res) {
    const id_user = req.params.id
    try {
      const findUser = await userService.findUserRestaurants(id_user)
      return res.status(200).json(findUser);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const id_user = req.params.id;
      const updatedUser = req.body
      const userToUpdate = await userService.updateUser(id_user, updatedUser);
      if (!userToUpdate) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(userToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const id_user = req.params.id
      const deletedUser = await userService.deleteUser(id_user);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

};

module.exports = UserController;
