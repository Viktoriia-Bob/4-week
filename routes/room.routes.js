const express = require('express');
const router = express.Router();
const roomControllers = require('../controllers/room.controllers');
const {validate} = require('express-validation');
const {create} = require('../validators/room.validation');

router.get('/', roomControllers.listRooms);
router.get('/:id', roomControllers.getRoomById);
router.post('/', validate(create, {}, {abortEarly: false}), roomControllers.createRoom);
router.delete('/:id', roomControllers.deleteRoomById);
router.patch('/:id', roomControllers.updateRoomById);
router.get('/by-user/:userId', roomControllers.getAllRoomsByUser);

module.exports = router;