const app = require('../core/express');
const userRoutes = require('../routes/user.routes');
const roomRoutes = require('../routes/room.routes');
const messageRoutes = require('../routes/message.routes');
const { transformError } = require('../helpers/validation.errors');

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/messages', messageRoutes);

app.use(transformError);