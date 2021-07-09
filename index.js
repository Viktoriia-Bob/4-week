require('dotenv').config();
const { listen } = require('./core/express');
const { connectDB } = require('./core/db');
require('./routes/index.routes');

(async () => {
    try {
        await connectDB();
        listen();
    } catch (err) {
        console.log(err);
    }
})();