const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    name: {type: 'string', required: true, unique: true},
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    roomId: {type: Types.ObjectId, ref: 'Room', required: false, default: null}
});

const users = model('User', userSchema);

module.exports = users;