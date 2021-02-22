const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Movie', {
    title: Joi.string().required(),
    imageSource: Joi.number().required(),
    description: Joi.string(),
})
