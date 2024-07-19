import * as userService from '../services/userService.mjs'
// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user._id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const updatedUser = await userService.updateUser(req.user._id, userData);
    res.json(updatedUser);
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
