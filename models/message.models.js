const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
    ownerId: { type: Types.ObjectId, ref: 'User', required: true},
    roomId: { type: Types.ObjectId, ref: 'Room', required: true},
    text: {type: 'string', required: true}
});

const messages = model('Message', messageSchema);

module.exports = messages;