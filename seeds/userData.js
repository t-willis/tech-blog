const { User } = require('../models');

const userData = [
    {
        username: 'testUser',
        email: 'test@user.com',
        password: 'testPassword',
    },
    {
        username: 'UserTwo',
        email: 'userTwo@wow.com',
        password: 'testPassword2',
    },
    {
        username: 'threeman',
        email: 'bigemail@gmail.com',
        password: 'thisIsMyPassword',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;