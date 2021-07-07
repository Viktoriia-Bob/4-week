const { Schema, model, Types } = require('mongoose');

const roomSchema = new Schema({
    title: {type: 'string', required: true},
    ownerId: {type: Types.ObjectId, ref: 'User', required: true},
    description: {type: 'string', required: false},
    userId: [{type: Types.ObjectId, ref: 'User', required: false}]
});

const rooms = model('Room', roomSchema);

module.exports = rooms;