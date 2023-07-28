const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.findAll({

        });
        
        const blogposts = dbBlogpostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );
        res.render('homepage', {
            blogposts
        });
        console.log(blogposts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;