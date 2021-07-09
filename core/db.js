const { connect } = require('mongoose');

exports.connectDB = async () => connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => console.log('Connect to MongoDB created'));