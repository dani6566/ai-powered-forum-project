import { safeExecute } from "../../../../db/config.js";

/**
 * Updates a user's profile information in the database.
 * @param {string} userId - The ID of the user.
 * @param {Object} profileData - The profile data.
 * @param {string} profileData.first_name - First name.
 * @param {string} profileData.last_name - Last name.
 * @param {string} profileData.email - Email address.
 * @returns {Promise<void>} Resolves when the update is complete.
 */
export const updateUserProfile = async (userId, { first_name, last_name, email }) => {
  const query = `UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE user_id = ?`;
  await safeExecute(query, [first_name, last_name, email, userId]);
};
