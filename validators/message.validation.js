const Joi = require('joi');

module.exports = {
    create: {
        body: Joi.object ({
            ownerId: Joi.string().required(),
            roomId: Joi.string().required(),
            text: Joi.string().required()
        }),
    }
};