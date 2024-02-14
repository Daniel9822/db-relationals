const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')
const Student = require('./students')

const Teacher = sequelize.define(
  'teacher',
  {
    name: {
      type: DataTypes.STRING,
      require: true
    },
    lastName: {
      type: DataTypes.STRING,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      require: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

Teacher.hasMany(Student)

module.exports = Teacher
