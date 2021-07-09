const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    create: {
        body: Joi.object ({
            ownerId: Joi.objectId().required(),
            roomId: Joi.objectId().required(),
            text: Joi.string().required()
        }),
    }
};