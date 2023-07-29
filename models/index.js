const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// User, Blogpost, Comment
// User has many Blogpost

// Blogpost belongsTo User
// Blogpost has many Comment

// Comment belongsTo Blogpost

User.hasMany(Blogpost, {
    foreignKey: 'posted_by',
});

Blogpost.belongsTo(User, {
    foreignKey: 'posted_by',
});
Blogpost.hasMany(Comment, {
    foreignKey: 'commented_on',
});
Comment.belongsTo(Blogpost, {
    foreignKey: 'commented_on'
});

// Comment.belongsTo(Blogpost, {
//     foreignKey: ''
// });

module.exports = { User, Blogpost, Comment };