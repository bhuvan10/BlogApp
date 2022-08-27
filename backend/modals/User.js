const Sequelize = require('Sequelize');
const db = require('../routes/db')

const user = db.define('users',{

  
  password:{
    type:Sequelize.STRING
     },
   email:{
    type:Sequelize.STRING 
    },
    username:{
      type:Sequelize.STRING 
      }

});
module.exports=user