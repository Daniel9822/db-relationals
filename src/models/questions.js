const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Questions = sequelize.define(
  'question',
  {
    email: {
      type: DataTypes.STRING,
      require: true
    },
    currentQuestion: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    timestamps: true
  }
)


module.exports = Questions
