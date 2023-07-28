const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedBlogpost = require('./blogpostData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();
    await seedBlogpost();
    await seedComment();

    process.exit(0);
};

seedAll();