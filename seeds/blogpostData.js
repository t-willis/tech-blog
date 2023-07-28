const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'This is a test title',
        body: 'There are a lot of moving parts to be dealt with in this project. Handlebars is neat though!',
        posted_by: 1,
    },
];

const seedBlogpost = () => Blogpost.build(blogpostData);

module.exports = seedBlogpost;