const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    create: {
        body: Joi.object ({
            title: Joi.string().min(2).token().required(),
            ownerId: Joi.objectId().required(),
            description: Joi.string().default(null),
            usersId:  Joi.array().unique('_id').items(Joi.objectId()).default([])
        })
    }
};