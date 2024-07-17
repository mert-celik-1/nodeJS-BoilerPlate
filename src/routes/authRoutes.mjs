import express from 'express'
import { loginUser, registerUser } from '../services/authService.mjs';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
