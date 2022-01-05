const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();
const {body} = require('express-validator')

router.post('/singUp',
	body('login').isLength({min: 3, max: 32}),
	body('email').isEmail(),
	body('password').isLength({min: 3, max: 32}),
	userController.signUp);
router.post('/singIn', userController.signIn);
router.post('/logout', userController.logout);
router.get('/active/:link', userController.active);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;