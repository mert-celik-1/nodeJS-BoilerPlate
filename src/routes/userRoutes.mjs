import express from 'express'
import { getAllUsers, getUserProfile, updateUserProfile } from '../services/userService.mjs';
import { admin, protect } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').get(protect, admin, getAllUsers);

export default router;
