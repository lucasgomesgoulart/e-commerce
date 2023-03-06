// const userService = require('../services/userService');

const UserController = {
  async create(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findById(req, res) {
    try {
      const userId = req.params.id;
      const user = await userService.findUserById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const userId = req.params.id;
      const updatedUser = await userService.updateUser(userId, req.body);
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const userId = req.params.id;
      const deletedUser = await userService.deleteUser(userId);
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
