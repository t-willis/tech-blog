const { User } = require('../models');

// important note that seeded users created with the User model do not have their passwords encrypted
// by the hook using bcrypt. Therefore they cannot used to log in. They are just here to be used by
// seeded blogposts and comments
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