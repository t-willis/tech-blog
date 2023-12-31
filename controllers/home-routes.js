const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

const serialize = (data) => JSON.parse(JSON.stringify(data));

// route to get all blogposts and render homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            order: [
                ['id', 'DESC'],
            ],
        });

        const blogposts = dbBlogpostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );
        res.render('homepage', {
            blogposts: blogposts,
            loggedIn: req.session.loggedIn,
            username: req.session.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get all blogposts for logged in user and render dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbBlogPostData = await Blogpost.findAll({
            where: {
                posted_by: req.session.userId,
            },
            order: [
                ['id', 'DESC'],
            ],
        });
        
        const blogposts = serialize(dbBlogPostData);
        res.render('dashboard', {
            blogposts: blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get single blogpost by id then render page with that blogpost and comments
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
                    attributes: ['body', 'commented_by', 'date_posted'],
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
            userId: req.session.userId,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to render login page
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to render newblogpost page
router.get('/newblogpost', withAuth, async (req, res) => {
    try {
        res.render('new-blogpost', {
            loggedIn: req.session.loggedIn,
            userId: req.session.userId,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get blogpost by id, render edit-blogpost page
router.get('/editBlogpost/:id', withAuth, async (req, res) => {
    try {
        const dbBlogPostData = await Blogpost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
        });
        const blogpost = serialize(dbBlogPostData);
        if (req.session.userId === blogpost.posted_by) {
            console.log('testclg');
        } else {
            res.redirect('/dashboard');
        }
        res.render('edit-blogpost', {
            blogpost: blogpost,
            loggedIn: req.session.loggedIn,
            userId: req.session.userId,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;