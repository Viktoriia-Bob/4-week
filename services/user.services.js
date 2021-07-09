const users = require('../models/user.models');

exports.list = async () => {
    return users.find({})
        .limit(10)
        .sort({name: 1})
        .lean();
};

exports.getById = async (id) => {
    return users.findById(id).lean();
};

exports.createUser = async(body) => {
    return users.create(body);
};

exports.deleteUser = async(id) => {
    return users.findByIdAndDelete(id).lean();
};

exports.updateUser = async(id) => {
    return users.findByIdAndUpdate(id, {}, {new: true}).lean();
};

exports.joinToRoom = async(idUser, idRoom) => {
    const user = await users.findById(idUser);
    await users.findByIdAndUpdate(idUser, {roomId: idRoom}, {new: true});
    return user.roomId;
};

exports.leaveFromRoom = async(idUser) => {
    return users.findByIdAndUpdate(idUser, {roomId: null}, {new: true}).lean();
};

exports.getAllUsersFromRoom = async(rId) => {
    return users.find({roomId: rId}).populate('Room').limit(10);
};

exports.deleteAllUsersFromRoom = async(rId) => {
    return users.updateMany({roomId: rId}, {roomId: null}, {new: true});
};