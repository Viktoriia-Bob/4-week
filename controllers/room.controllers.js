const roomServices = require('../services/room.services');
const { joinToRoom, deleteAllUsersFromRoom } = require('../services/user.services');

exports.listRooms = async(req, res) => {
    const rooms = await roomServices.list();
    res.status(200).json(rooms);
};

exports.getRoomById = async({ params: { id } }, res) => {
    const room = await roomServices.getById(id);
    res.status(200).json(room);
};

exports.createRoom = async({ body }, res) => {
    let room = await roomServices.createRoom(body);
    const oldRoom = await joinToRoom(body.ownerId, room._id);
    if (oldRoom !== null) {
        await roomServices.leaveUserFromRoom(oldRoom, body.ownerId);
    }
    room = await roomServices.joinUserToRoom(room._id, body.ownerId);
    room.save();
    res.status(201).json({ message: 'The item was created successfully' });
};

exports.deleteRoomById = async({ params: { id } }, res) => {
    await deleteAllUsersFromRoom(id);
    await roomServices.deleteRoom(id);
    res.status(204).json({ message: 'The item was deleted successfully' });
};

exports.updateRoomById = async({ params: { id } }, res) => {
    const room = await roomServices.updateRoom(id);
    res.status(200).json(room);
};

exports.getAllRoomsByUser = async({ params: { userId } }, res) => {
    const rooms = await roomServices.getAllRoomsByUser(userId);
    res.status(200).json(rooms);
};