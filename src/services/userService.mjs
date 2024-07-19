import * as userRepository from '../dal/userRepository.mjs';

// Get User by ID
export const getUserById = async (userId) => {
  try {
    const user = await userRepository.findById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update User
export const updateUser = async (userId, userData) => {
  try {
    const user = await userRepository.findById(userId);

    if (user) {
      user.username = userData.username || user.username;
      user.email = userData.email || user.email;

      if (userData.password) {
        user.password = userData.password;
      }

      const updatedUser = await userRepository.saveUser(user);
      return updatedUser;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    const users = await userRepository.findAll();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
