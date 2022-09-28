const sequelize = require('../config/connection');

// import part of the sequelize library

const { Model, DataTypes } = require('sequelize');


// initialize user Model table
class Post extends Model{}

Post.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allownull:false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false,
        },
    title:{
        type: DataTypes.STRING,
        allowNull:false,
    },


    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        reference:{
            model:'user',
            key:'id'
        },
    },
    
},
{
   
sequelize,
timestamps: true,
underscored: true,
freezeTableName: true,
modelName: 'post',
}

);

module.exports = Post;