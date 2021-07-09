const users = require('../models/user.models');

exports.list = async () => {
    return users.find()
        .limit(10)
        .sort({name: 1})
        .populate('roomId')
        .lean();
};

exports.getById = async (id) => {
    return users.findById(id)
        .populate('roomId')
        .lean();
};

exports.createUser = async(body) => {
    return users.create(body);
};

exports.deleteUser = async(id) => {
    return users.findByIdAndDelete(id);
};

exports.updateUser = async(id) => {
    return users.findByIdAndUpdate(id, {}, {new: true})
    .lean();
};

exports.joinToRoom = async(userId, roomId) => {
    const user = await users.findById(userId);
    await users.findByIdAndUpdate(userId, { roomId }, { new: true });
    return user.roomId;
};

exports.leaveFromRoom = async(userId) => {
    return users.findByIdAndUpdate(userId, { roomId: null }, { new: true })
        .lean();
};

exports.getAllUsersFromRoom = async(roomId) => {
    return users.find({ roomId })
        .populate('roomId')
        .limit(10);
};

exports.deleteAllUsersFromRoom = async(roomId) => {
    return users.updateMany({ roomId }, { roomId: null }, { new: true });
};