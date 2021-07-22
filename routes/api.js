const router = require('express').Router();
const user = require('../controller/user');
const magazin=require('../controller/magazin')

// api user
router.post('/register', user.register);
router.post('/login', user.login);
//api magazin
router.post('/createMagazin',magazin.createMagazin)
router.delete('/deleteMagazin/:id',magazin.deleteMagazin)
router.post('/updateMagazin/:id',magazin.updateMagazin)
module.exports = router;
