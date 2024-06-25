const userDao = require('../dao/userDao');
const UserResponseDto = require('../dtos/userResponseDto');

// Service function to create a new user
const createUser = async (userData) => {
    const user = await userDao.createUser(userData);
    return new UserResponseDto(user);
};

// Service function to get a user by ID
const getUserById = async (userId) => {
    const user = await userDao.getUserById(userId);
    if (user) {
        return new UserResponseDto(user);
    }
    return null;
};

// Service function to update a user by ID
const updateUser = async (userId, userData) => {
    const user = await userDao.updateUser(userId, userData);
    if (user) {
        return new UserResponseDto(user);
    }
    return null;
};

// Service function to delete a user by ID
const deleteUser = async (userId) => {
    const user = await userDao.deleteUser(userId);
    if (user) {
        return new UserResponseDto(user);
    }
    return null;
};

// Service function to get all users
const getAllUsers = async () => {
    const users = await userDao.getAllUsers();
    return users.map(user => new UserResponseDto(user));
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
};
