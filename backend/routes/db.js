const Sequelize = require('sequelize');
const db = new Sequelize('Blogs', 'postgres', 'bhuvan22', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});


 module.exports=db