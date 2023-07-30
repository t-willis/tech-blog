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

router.get('/dashboard', withAuth, async (req, res) => {
    try {

        const dbBlogPostData = await Blogpost.findAll({
            where: {
                posted_by: req.session.userId,
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        const blogposts = serialize(dbBlogPostData);
        res.render('dashboard', {
            blogposts: blogposts,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
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

        for (let i = 0; i < blogpost.comments.length; i++) {
            const replaceMe = blogpost.comments[i].commented_by;
            let replaceWith;
        
            for (let u = 0; u < users.length; u++) {
                if (users[u].id === replaceMe) {
                    replaceWith = users[u].username;
                }
            }
            blogpost.comments[i].commented_by = replaceWith;
        };


        res.render('blogpost', {
            blogpost: blogpost,
            loggedIn: req.session.loggedIn,
        });
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