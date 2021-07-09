const { Schema, model, Types } = require('mongoose');
const defaultAvatar = 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80';

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