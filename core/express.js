const express = require('express');
const userRoutes = require('../routes/user.routes');
const roomRoutes = require('../routes/room.routes');
const messageRoutes = require('../routes/message.routes');
const { transformError } = require('../helpers/validation.errors');

const app = express();
const PORT = 3000;
const PID = process.pid;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/messages', messageRoutes);

app.use(transformError);
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT} and pid ${PID}`);
});

module.exports = app;