const { Comment } = require('../models');

const commentData = [
    {
        body: 'Real and true.',
        commented_on: 1,
        commented_by: 2,
    },
    {
        body: 'handlebars isnt weird youre just bad',
        commented_on: 2,
        commented_by: 1,
    },
    {
        body: 'mad cuz bad lol gottem',
        commented_on: 3,
        commented_by: 2,
    },
    {
        body: 'yeh dudes mad',
        commented_on: 3,
        commented_by: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;