
const { Router } = require('express');

const User = require('./index');

const router = new Router();

// router.use('/user', User);
router.get('/user', () => {
    console.log("hello dude")
});

module.exports = router