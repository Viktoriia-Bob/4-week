const messageServices = require('../services/message.services');

exports.listMessages = async (req, res) => {
    const messages = await messageServices.list();
    res.status(200).json(messages);
};

exports.getMessageById = async ({params: {id}}, res) => {
    const message = await messageServices.getById(id);
    res.status(200).json(message);
};

exports.createMessage = async ({body}, res) => {
    const message = await messageServices.createMessage(body);
    res.status(200).json(message);
};

exports.deleteMessageById = async ({params: {id}}, res) => {
    await messageServices.deleteMessage(id);
    res.redirect('/messages');
};

exports.updateMessageById = async ({params: {id}}, res) => {
    const message = await messageServices.updateMessage(id);
    res.status(200).json(message);
};

exports.getAllMessagesByUser = async ({params: {userId}}, res) => {
    const messages = await messageServices.getAllMessagesByUser(userId);
    res.status(200).json(messages);
};

exports.getAllMessagesByRoom = async ({params: {roomId}}, res) => {
    const messages = await messageServices.getAllMessagesByRoom(roomId);
    res.status(200).json(messages);
};