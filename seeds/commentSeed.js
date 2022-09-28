const { Comment } = require('../model');

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

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;