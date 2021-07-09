const { Schema, model, Types } = require('mongoose');

const roomSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    ownerId: { 
        type: Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    description: { 
        type: String, 
        required: false,
        default: null
    },
    usersId: [{
        type: Types.ObjectId,
        ref: 'User', 
        required: false,
        default: []
    }]
}, {
    versionKey: false,
    timestamps: true,
    collection: 'rooms'
});

const rooms = model('Room', roomSchema);

module.exports = rooms;