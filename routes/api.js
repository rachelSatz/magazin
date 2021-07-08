const router = require('express').Router();
const user = require('../controller/user');

// api user
router.post('/register', user.register);

module.exports = router;
