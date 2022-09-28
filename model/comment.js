const sequelize = require('../config/connection');

// import part of the sequelize library

const { Model, DataTypes } = require('sequelize');



// initialize user Model table
class Comment extends Model{}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false,
        },

        post_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            reference:{
                model:'post',
                key:'id'
            },
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
modelName: 'comment',
}

);

module.exports = Comment;                                                                                                                                                                                                                                                                                                                                                                                               