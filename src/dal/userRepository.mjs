import User from "../models/User.mjs";

// Get User by ID
export const findById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update User
export const saveUser = async (user) => {
  try {
    const updatedUser = await user.save();
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get All Users
export const findAll = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
