const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    create: {
        body: Joi.object ({
            name: Joi.string().min(2).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")).required(),
            roomId: Joi.objectId().default(null),
            avatar: Joi.string().dataUri().default(null)
        }),
    }
};