
const router = require('express').Router();

const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

const commentRoutes = require('./comment-routes');

const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/Dashboard', dashboardRoutes);






router.use('/post', postRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;