const Sequelize = require('sequelize')
const sequelize = require('../../models')

const Team = require('../../models/team.js')(sequelize, Sequelize)
Team.sync()

exports.getAll = async (req, res, next) => {
  try {
    const teams = await Team.findAll()
    return res.status(200).json({
      data: teams,
      status: true
    })
  } catch (err) {
    console.log('::::::: err getAll::::::: ', err)
    return res.status(500).json({
      message: 'Something wents wrong !!',
      status: false
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id

    const team = await Team.findOne({ where: { id } })

    return res.status(200).json({
      data: team,
      status: true
    })
  } catch (err) {
    console.log('::::::: err getById::::::: ', err)
    return res.status(500).json({
      message: 'Something wents wrong !!',
      status: false
    })
  }
}

exports.create = async (req, res, next) => {
  try {
    const payload = req.body
    const team = await Team.create(payload)

    return res.status(200).json({
      data: team,
      message: 'Team created successfully !!',
      status: true
    })
  } catch (err) {
    console.log('::::::: err create::::::: ', err)
    return res.status(500).json({
      message: 'Something wents wrong !!',
      status: false
    })
  }
}

exports.deleteById = async (req, res, next) => {
  try {
    const id = req.params.id
    await Team.destroy({ where: { id } })

    return res.status(200).json({
      message: 'Team deleted successfully !!',
      status: true
    })
  } catch (err) {
    console.log('::::::::::::: Err deleteById:::::::::::::: ', err)
    return res.status(500).json({
      message: 'Something wents wrong !!',
      status: false
    })
  }
}

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id
    const payload = req.body
    
    await Team.update(
      payload,
      { where: { id } }
    )
    
    return res.status(200).json({
      message: 'Team updated successfully !!',
      status: true
    })
  } catch (err) {
    console.log('::::::::: err update :::::::: ', err)
    return res.status(500).json({
      message: 'Something wents wrong !!',
      status: false
    })
  }
}
