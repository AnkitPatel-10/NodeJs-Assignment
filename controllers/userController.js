const userService = require('../services/userService');
const UserRequestDto = require('../dtos/userRequestDto');

// Controller function to handle user creation
const createUser = async (req, res) => {
    const validationErrors = UserRequestDto.validate(req.body);
    if (validationErrors.length) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        const userDto = new UserRequestDto(req.body);
        const user = await userService.createUser(userDto);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to handle retrieving a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to handle updating a user by ID
const updateUser = async (req, res) => {
    const validationErrors = UserRequestDto.validate(req.body);
    if (validationErrors.length) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        const userDto = new UserRequestDto(req.body);
        const user = await userService.updateUser(req.params.id, userDto);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to handle deleting a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to handle retrieving all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
};
