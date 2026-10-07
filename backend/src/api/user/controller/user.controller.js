import { updateUserProfile } from '../service/user.service.js';

/**
 * Handles the update of a user's profile.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<import('express').Response>} The response indicating success or failure.
 */
export const updateProfile = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const userId = req.user.id; 

  try {
    await updateUserProfile(userId, { first_name, last_name, email });
    return res.status(200).json({ message: "Profile updated successfully!" });
  } catch (error) {
    console.error(error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: "This email is already in use by another account." });
    }
    return res.status(500).json({ message: "Server error" });
  }
};
