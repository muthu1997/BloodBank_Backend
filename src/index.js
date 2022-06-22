
const { Router } = require('express');
const { getUserDetails } = require('./controller');

const router = new Router();

router.get('/getUserDetails',getUserDetails);

// router.post('/login', signin);

// router.post('/forgotPassword', forgotPassword);

// router.get('/forgotPasswordVerifytToken', forgotPasswordTokenVerification);

// router.put('/resetPassword/', resetPassword);

// router.get('/regenerateToken', regeneratetoken);

// router.get('/logout', logout);

module.exports = router