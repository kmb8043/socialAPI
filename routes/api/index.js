const router = require('express').Router();

const thoughtRoute = require('./thought-route');
const userRoute = require('./user-route');

router.use('/thought' , thoughtRoute);
router.use('/user' , userRoute);

module.exports = router;