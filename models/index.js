const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// User, Blogpost, Comment
// User has many Blogpost

// Blogpost belongsTo User
// Blogpost has many Comment

// Comment belongsTo Blogpost

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
});
Blogpost.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Comment.belongsTo(Blogpost, {
    foreignKey: 'comment_id'
});

module.exports = { User, Blogpost, Comment };