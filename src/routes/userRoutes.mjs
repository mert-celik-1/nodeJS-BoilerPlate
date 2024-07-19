import express from 'express'
import { admin, protect } from '../middlewares/authMiddleware.mjs';
import { getAllUsers, getUserProfile, updateUserProfile } from '../controllers/userController.mjs';

const router = express.Router();


router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').get(protect, admin, getAllUsers);

export default router;
