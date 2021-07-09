const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/message.controllers');
const { validate } = require('express-validation');
const { create } = require('../validators/message.validation');

router.get('/', messageControllers.listMessages);
router.get('/:id', messageControllers.getMessageById);
router.post('/', validate(create, {}, {abortEarly: false}), messageControllers.createMessage);
router.delete('/:id', messageControllers.deleteMessageById);
router.patch('/:id', messageControllers.updateMessageById);
router.get('/by-user/:userId', messageControllers.getAllMessagesByUser);
router.get('/by-room/:roomId', messageControllers.getAllMessagesByRoom);

module.exports = router;