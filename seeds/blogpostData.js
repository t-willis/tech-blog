const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'This is a test title',
        body: 'There are a lot of moving parts to be dealt with in this project. Handlebars is neat though!',
        posted_by: 1,
    },
    {
        title: 'Handlebars is weird',
        body: 'partials are pretty neat though',
        posted_by: 2,
    },
    {
        title: 'Sequelize makes my head hurt',
        body: 'not much more to it, the title says it all',
        posted_by: 1,
    },
    {
        title: 'Does my db work?',
        body: 'idk if my db works. help pls.',
        posted_by: 3,
    }
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;