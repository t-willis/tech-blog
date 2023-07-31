const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/newblogpost', blogRoutes);
router.use('/newcomment', commentRoutes);

module.exports = router;