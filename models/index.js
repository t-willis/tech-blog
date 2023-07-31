const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

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
User.hasMany(Comment, {
    foreignKey: 'commented_by'
});
Comment.belongsTo(User, {
    foreignKey: 'commented_by'
});

module.exports = { User, Blogpost, Comment };