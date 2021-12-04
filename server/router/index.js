const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.post('/singUp', userController.signUp);
router.post('/singIn', userController.signIn);
router.post('/logout', userController.logout);
router.get('/active/:link', userController.active);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;