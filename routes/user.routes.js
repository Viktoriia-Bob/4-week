const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controllers');
const { validate } = require('express-validation');
const { create } = require('../validators/user.validation');

router.get('/', userControllers.listUsers);
router.get('/:id', userControllers.getUserById);
router.post('/', validate(create, {}, {abortEarly: false}), userControllers.createUser);
router.delete('/:id', userControllers.deleteUserById);
router.patch('/:id', userControllers.updateUserById);
router.post('/join-to-room', userControllers.joinToRoom);
router.post('/leave-from-room', userControllers.leaveFromRoom);
router.get('/room/:roomId', userControllers.getAllUsersFromRoom);

module.exports = router;