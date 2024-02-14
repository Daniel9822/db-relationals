const server = require('./src/server')
const sequelize = require('./src/config/db');
require('./src/models')

const PORT = process.env.PORT ?? 3000

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force: true})
    console.log('Connection has been established successfully.');
  } catch (error) { 
    console.error('Unable to connect to the database:', error);
  }
  console.log('server is listener on port 3000');
})