const router = require('express').Router();

const test = require('./test/test.routes'); //? Import routes for the test


//? route de test
router.use('/ping', test);







module.exports = router;