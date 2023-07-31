const router = require('express').Router();
const { Blogpost } = require('../../models');

// req.body should look like...
// {
//     title: 'title goes here',
//     body: 'body goes here',
//     posted_by: INTEGER SPECIFYING USER,
// }

// post route to create a new blogpost
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

// route to delete a given blogpost by id
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
});

// route to update a given blogpost by id
router.put("/:id", async (req, res) => {
    try {
        const updateData = await Blogpost.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(updateData);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;