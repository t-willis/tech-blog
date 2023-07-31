const router = require('express').Router();
const { Comment } = require('../../models');

// route to create a new comment
router.post('/', async (req, res) => {
    try {
        if (req.body.body || req.body.commented_on || req.body.commented_by) {
            const comment = await Comment.create(req.body);
            res.json(comment);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;