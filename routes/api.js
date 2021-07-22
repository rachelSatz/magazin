const router = require('express').Router();
const user = require('../controller/user');
const post = require('../controller/post');
// api user
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/addPost',post.addPost);
router.post('/updatePost/:id',post.updatePost)
module.exports = router;
