const { User } = require('../models');

const userData = [
    {
        username: 'testUser',
        email: 'test@user.com',
        password: 'testPassword',
    },
];

const seedUser = () => User.build(userData);

module.exports = seedUser;