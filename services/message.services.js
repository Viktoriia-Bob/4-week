const messages = require('../models/message.models');

exports.list = async() => {
    return messages.find()
        .limit(10)
        .populate('ownerId')
        .populate('roomId')
        .lean();
};

exports.getById = async(id) => {
    return messages.findById(id)
        .populate('ownerId')
        .populate('roomId')
        .lean();
};

exports.createMessage = async(body) => {
    return messages.create(body);
};

exports.deleteMessage = async(id) => {
    return messages.findByIdAndDelete(id);
};

exports.updateMessage = async(id) => {
    return messages.findByIdAndUpdate(id).lean();
};

exports.getAllMessagesByUser = async(userId) => {
    return messages.find({ ownerId: userId })
        .populate('ownerId')
        .limit(10)
        .lean();
};

exports.getAllMessagesByRoom = async(roomId) => {
    return messages.find({ roomId })
        .populate('roomId')
        .limit(10)
        .lean();
};