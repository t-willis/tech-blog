const router = require('express').Router();
const { Blogpost } = require('../../models');

// req.body should look like...
// {
//     title: 'title goes here',
//     body: 'body goes here',
//     posted_by: INTEGER SPECIFYING USER,
// }

router.post('/', async (req, res) => {
    Blogpost.create(req.body)
    .then((blogpost) => {
        if (!req.body.title || !req.body.body || !req.body.posted_by) {
            console.log(`Something went wrong. here's what you submitted:
            req.body.title: ${req.body.title}
            req.body.body: ${req.body.body},
            req.body.posted_by: ${req.body.posted_by}`);
            return;
        } else {
            res.json(blogpost);
        }
    }).catch((err) => {
        res.json(err);
    });
});






module.exports = router;