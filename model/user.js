const sequelize = require('../config/connection');

// import part of the sequelize library
const{ Model, DataTypes}=require('sequelize');

//library for password 
const bcrypt = require('bcrypt');



// initialize user Model table

class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

User.init({
    id:{
        type:sequelize.INTEGER,
        primarykey:true,
        autoincrement:true,
        allownull:false,
    },
    username: {
        type:sequelize.STRING,
        allownull:false,
        validate:{
            len:[3, 26]},
        },
    password:{
        type:sequelize.STRING,
        allownull:false,
        validate:
        {len:[5, 60]},
    },
    
},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        },
},

sequelize,
timestamps: false,
underscored: true,
freezeTableName: true,
modelName: 'user',
}

);

module.exports = User;