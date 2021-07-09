const { connect } = require('mongoose');

exports.connectDB = async () => connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => console.log('Connect to MongoDB created'));