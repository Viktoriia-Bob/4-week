const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
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
    }
}, {
    versionKey: false,
    timestamps: true,
    collection: 'users'
});

const users = model('User', userSchema);

module.exports = users;