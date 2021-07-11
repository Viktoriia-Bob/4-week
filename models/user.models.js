const { Schema, model, Types } = require('mongoose');
const defaultAvatar = 'https://picsum.photos/200/300';

const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    roomId: {
        type: Types.ObjectId, 
        ref: 'Room', 
        required: false, 
        default: null
    },
    avatar: {
        type: String,
        default: defaultAvatar
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'users'
});

const users = model('User', userSchema);

module.exports = users;