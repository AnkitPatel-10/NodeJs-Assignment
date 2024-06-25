const User = require('../models/userModel');

// DAO function to create a new user
const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// DAO function to get a user by ID
const getUserById = async (userId) => {
    return await User.findById(userId);
};

// DAO function to update a user by ID
const updateUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
};

// DAO function to delete a user by ID
const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

// DAO function to get all users
const getAllUsers = async () => {
    return await User.find();
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
};
