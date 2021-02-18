const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Stream', {
  src: Joi.number().required(),
  title: Joi.string().required(),
})
