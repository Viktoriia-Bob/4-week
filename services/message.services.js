const messages = require('../models/message.models');

exports.list = async() => {
    return messages.find({}).limit(10).lean();
};

exports.getById = async(id) => {
    return messages.findById(id).lean();
};

exports.createMessage = async(body) => {
    return messages.create(body);
};

exports.deleteMessage = async(id) => {
    return messages.findByIdAndDelete(id).lean();
};

exports.updateMessage = async(id) => {
    return messages.findByIdAndUpdate(id).lean();
};

exports.getAllMessagesByUser = async(uId) => {
    return messages.find({ownerId: uId}).populate('User').limit(10);
};

exports.getAllMessagesByRoom = async(rId) => {
    return messages.find({roomId: rId}).populate('Room').limit(10);
};