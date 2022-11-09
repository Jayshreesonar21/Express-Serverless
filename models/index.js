const Sequelize = require('sequelize')

var sequelize = new Sequelize('serverlessDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
