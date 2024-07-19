import User from '../models/User.mjs';
import jwt from 'jsonwebtoken';
import loadConfig from '../utils/config.mjs';

loadConfig();

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export const registerUser = async (userData) => {
  const { username, email, password } = userData;
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }

    // Create new user
    const user = await User.create({ username, email, password });

    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      };
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
