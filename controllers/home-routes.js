const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

const serialize = (data) => JSON.parse(JSON.stringify(data));

router.get('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        
        
        const blogposts = dbBlogpostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );
        res.render('homepage', {
            blogposts: blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/blogpost/:id', withAuth, async (req, res) => {
    try {
        const dbBlogPostData = await Blogpost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
                {
                    model: Comment,
                    attributes: ['body', 'commented_by'],
                },
            ],
        });
        const dbUserData = await User.findAll({
            attributes: ['id', 'username'],
        });

        const blogpost = serialize(dbBlogPostData);
        const users = serialize(dbUserData);

        res.render('blogpost', {
            blogpost: blogpost,
            loggedIn: req.session.loggedIn,
            users: users,
        });
        console.log(users);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            loggedIn: req.session.loggedIn,
        });
        console.log('someone visited the login page.');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;