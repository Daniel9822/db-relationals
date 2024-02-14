const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Student = sequelize.define(
  'student',
  {
    name: {
      type: DataTypes.STRING,
      require: true
    },
    session: {
      type: DataTypes.INTEGER,
      require: true
    }
  },
  {
    timestamps: true,
  }
)

module.exports = Student
