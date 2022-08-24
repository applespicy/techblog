const { Comment } = require('../models');

const commentData = [
    {
        content: 'lord have mercy',
        user_id: 2,
        post_id: 1
    },
    {
        content: 'i am a winner',
        user_id: 1,
        post_id: 1
    }
];

const seedComment = () => User.bulkCreate(commentData);

module.exports = seedComment;