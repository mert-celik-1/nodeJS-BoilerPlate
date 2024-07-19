import * as authService from '../services/authService.mjs';
import { validationResult } from 'express-validator';

// Register a new user
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await authService.loginUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
