const Joi = require('joi');

module.exports.onlyid = Joi.object({
    id: Joi.number().required()
});

module.exports.onlyname = Joi.object({
    name: Joi.string().required()
});

module.exports.complete = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
});