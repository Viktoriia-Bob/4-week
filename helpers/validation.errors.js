const { ValidationError } = require('express-validation');

module.exports = {
    transformError: (err, req, res, next) => {
        if (err instanceof ValidationError) {
            return res.status(err.statusCode).json(err);
        }
        return res.status(500).json(err);
    }
};