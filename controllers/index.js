const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// specify route to use given routes files
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;