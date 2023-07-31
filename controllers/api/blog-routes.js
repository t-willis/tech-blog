const router = require('express').Router();
const { Blogpost } = require('../../models');

// req.body should look like...
// {
//     title: 'title goes here',
//     body: 'body goes here',
//     posted_by: INTEGER SPECIFYING USER,
// }


router.post('/', async (req, res) => {
    try {
        if (req.body.title || req.body.body || req.body.posted_by) {
            const blogpost = await Blogpost.create(req.body);
            res.json(blogpost);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteData = await Blogpost.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(deleteData);
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;