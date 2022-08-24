const sequelize = require('../config/connection');

// import part of the sequelize library
const{Model, DataTypes}=require('sequelize');



// initialize user Model table
class Comment extends Model{}

Comment.init({
    id:{
        type:sequelize.INTEGER,
        primarykey:true,
        autoincrement:true,
        allownull:false,
    },
    content: {
        type:sequelize.TEXT,
        allownull:false,
        },

        post_id:{
            type:sequelize.INTEGER,
            allownull:false,
            reference:{
                model:'post',
                key:'id'
            },
        },


    user_id:{
        type:sequelize.INTEGER,
        allownull:false,
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