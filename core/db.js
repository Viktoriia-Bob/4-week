const { connect } = require('mongoose');

const connectDB = async () => connect('mongodb+srv://admin:admin12345@cluster0.62gyx.mongodb.net/chat', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => console.log('Connect to MongoDB created'));

module.exports = connectDB;