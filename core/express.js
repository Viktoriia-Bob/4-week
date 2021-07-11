const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const PID = process.pid;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT} and pid ${PID}`);
});

module.exports = app;