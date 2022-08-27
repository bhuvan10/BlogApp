const Sequelize = require('Sequelize');
const db = require('../routes/db')

const blog = db.define('blogs',{

  
  author:{
    type:Sequelize.STRING
     },
   title:{
    type:Sequelize.STRING 
    },
    description:{
      type:Sequelize.STRING 
      },
      imageurl:{
        type:Sequelize.STRING 
        } ,
        email:{
            type:Sequelize.STRING 
        }

});
module.exports=blog