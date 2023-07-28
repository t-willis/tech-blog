const { Comment } = require('../models');

const commentData = [
    {
        body: 'Real and true.',
        commented_on: 1,
    },
];

const seedComment = () => Comment.build(commentData);

module.exports = seedComment;