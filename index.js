const { listen } = require('./core/express');
const { connectDB } = require('./core/db');

(async () => {
    try {
        await connectDB();
        listen();
    } catch (err) {
        console.log(err);
    }
})();