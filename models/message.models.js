const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
    ownerId: { 
        type: Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    roomId: { 
        type: Types.ObjectId, 
        ref: 'Room', 
        required: true 
    },
    text: { 
        type: String, 
        required: true 
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'messages'
});

const messages = model('Message', messageSchema);

module.exports = messages;