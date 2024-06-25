const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes and map them to controller functions
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);  // Route to get all users

module.exports = router;
