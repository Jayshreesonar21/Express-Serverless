module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define(
    'Team',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      shortName: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      homeGround: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      logo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      staff: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: true,
        defaultValue: null
      }
    },
    {
      tableName: 'Team',
      timestamps: true
    }
  )
  return Team
}
