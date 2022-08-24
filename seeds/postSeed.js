const { Post } = require('../models');

const postData = [
    {
        title: 'God is great',
        content: 'He his faithful',
        user_id: 2
    },
    {
        title: 'I am a shining star',
        content: 'i can say that again',
        user_id: 1
    },
    {
        title: 'Halleluyah to God',
        content: 'He his faithful',
        user_id: 3
    },
    
];

const seedPost = () => User.bulkCreate(postData);

module.exports = seedPost;