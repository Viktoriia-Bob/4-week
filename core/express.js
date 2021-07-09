const express = require('express');

const app = express();
const PORT = 3000;
const PID = process.pid;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT} and pid ${PID}`);
});

module.exports = app;