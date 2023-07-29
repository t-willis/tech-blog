const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');

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
        });
        console.log(blogposts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/blogpost/:id', async (req, res) => {
    try {
        const dbBlogPostData = await Blogpost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        blogpost = serialize(dbBlogPostData)
        res.render('blogpost', {
            blogpost: blogpost,
        });
        console.log(blogpost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {

        });
        console.log('someone visited the login page.');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;