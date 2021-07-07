const Joi = require('joi');

module.exports = {
    create: {
        body: Joi.object ({
            title: Joi.string().min(2).token().required(),
            ownerId: Joi.string().required(),
            description: Joi.string(),
            userId:  Joi.array().unique('_id').items(Joi.string()).default([])
        })
    }
};