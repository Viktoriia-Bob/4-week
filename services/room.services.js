const rooms = require('../models/room.models');

exports.list = async() => {
    return rooms.find()
        .limit(10)
        .sort({title: 1})
        .lean();
};

exports.getById = async(id) => {
    return rooms.findById(id).lean();
};

exports.createRoom = async(body) => {
    return rooms.create(body);
};

exports.deleteRoom = async(id) => {
    return rooms.findByIdAndDelete(id).lean();
};

exports.updateRoom = async(id) => {
    return rooms.findByIdAndUpdate(id).lean();
};

exports.joinUserToRoom = async(roomId, userId) => {
    return rooms.findByIdAndUpdate(roomId, { $push: { usersId: userId } }, { new: true });
};

exports.leaveUserFromRoom = async(roomId, userId) => {
    return rooms.findByIdAndUpdate(roomId, { $pull: { usersId: userId } }, { new: true });
};

exports.getAllRoomsByUser = async(userId) => {
    return rooms.find({ ownerId: userId }).populate('User').limit(10);
};