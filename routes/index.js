const router = require('express').Router();
const apiRoute = require('./api');

router.use('/api' , apiRoute);
router.use((req, res) => {
    res.status(404).send('<h1> Error </h1>')
});

module.exports = router;