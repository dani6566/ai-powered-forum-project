import express from 'express';
import { updateProfile } from '../controller/user.controller.js';
import { authenticateUser } from '../../../middleware/authentication.js'; 

const router = express.Router();

/**
 * @route PUT /api/users/profile
 * @desc Update user profile details
 * @access Private
 */
router.put('/profile', authenticateUser, updateProfile);

export default router;