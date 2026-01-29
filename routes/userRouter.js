const express = require('express');
const {getRegister,getLogin,registerNewUser,login} = require('../controllers/userController');
const router = express.Router();

router.get('/register',getRegister);
router.get('/login',getLogin);
router.post('/register',registerNewUser);
router.post('/login',login);

module.exports = router;