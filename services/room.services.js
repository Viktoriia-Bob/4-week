const rooms = require('../models/room.models');

exports.list = async() => {
    return rooms.find({})
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

exports.joinUserToRoom = async(idRoom, idUser) => {
    return rooms.findByIdAndUpdate(idRoom, {$push: {userId: idUser}}, {new: true});
};

exports.leaveUserFromRoom = async(idRoom, idUser) => {
    return rooms.findByIdAndUpdate(idRoom, {$pull: {userId: idUser}}, {new: true});
};

exports.getAllRoomsByUser = async(uId) => {
    return rooms.find({ownerId: uId}).populate('User').limit(10);
};