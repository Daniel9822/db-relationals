const Sequelize = require('sequelize')
const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = require('./envs')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

module.exports = sequelize
