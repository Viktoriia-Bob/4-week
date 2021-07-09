const userServices = require('../services/user.services');
const { joinUserToRoom, leaveUserFromRoom } = require('../services/room.services');

exports.listUsers = async (req, res) => {
    const users = await userServices.list();
    res.status(200).json(users);
};

exports.getUserById = async ({ params: { id } }, res) => {
    const user = await userServices.getById(id);
    res.status(200).json(user);
};

exports.createUser = async ({ body }, res) => {
    const user = await userServices.createUser(body);
    res.status(200).json(user);
};

exports.deleteUserById = async ({ params: { id } }, res) => {
    await userServices.deleteUser(id);
    res.status(200).redirect('/users');
};

exports.updateUserById = async ({ params: { id } }, res) => {
    const user = await userServices.updateUser(id);
    res.status(200).json(user);
};

exports.joinToRoom = async ({ body: { userId, roomId } }, res) => {
    const oldRoom = await userServices.joinToRoom(userId, roomId);
    if (oldRoom !== null) {
        await leaveUserFromRoom(oldRoom, userId);
    }
    await joinUserToRoom(roomId, userId);
    res.status(200).redirect(`/users/${userId}`);
};

exports.leaveFromRoom = async ({ body: { userId, roomId } }, res) => {
    await userServices.leaveFromRoom(userId);
    await leaveUserFromRoom(roomId, userId);
    res.status(200).redirect(`/users/${userId}`);
};

exports.getAllUsersFromRoom = async ({ params: { roomId } }, res) => {
    const users = await userServices.getAllUsersFromRoom(roomId);
    res.status(200).json(users);
};