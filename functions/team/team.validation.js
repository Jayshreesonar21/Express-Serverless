const { Joi } = require('express-validation')

module.exports.getTeam = {
  params: Joi.object({
    id: Joi.number().integer().required()
  })
}

module.exports.createTeam = {
  body: Joi.object({
    fullName:    Joi.string().required().trim(),
    shortName:   Joi.string().optional(),
    homeGround:  Joi.string().required().trim(),
    logo:        Joi.string().required().trim(),
    staff:       Joi.string().required().trim(),
    description: Joi.string().optional(),
  })
}

module.exports.deleteTeam = {
  params: Joi.object({
    id: Joi.number().integer().required()
  })
}

module.exports.updateTeam = {
  params: Joi.object({
    id: Joi.number().integer().required()
  }),
  body: Joi.object({
    fullName:    Joi.string().trim(),
    shortName:   Joi.string().trim(),
    homeGround:  Joi.string().trim(),
    logo:        Joi.string().trim(),
    staff:       Joi.string().trim(),
    description: Joi.string().trim(),
  }).optional()
}
