const Sequelize = require('sequelize')
const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = require('./envs')
const { NODE_ENV, DB_DEPLOY } = require('./envs')

const DB_LOCAL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
const DB_PRODUCTION = DB_DEPLOY

const url = NODE_ENV.trim() === 'production' ? DB_PRODUCTION : DB_LOCAL

console.log(url)
 
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

module.exports = sequelize
