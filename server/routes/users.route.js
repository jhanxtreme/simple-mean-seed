const express = require('express');

const router = express.Router();

const controller = require('../controllers/users');

const authGuard = require('../middleware/auth-guard');

//middle
router.use((req, res, next)=>{
  console.log('User middleware was fired');
  next();
});

router.get('/', (req, res)=>{
  res.status(200).json({
    message: 'The User route'
  });
});

router.get('/all', authGuard, controller.getUsers);

router.post('/login', controller.loginUsers);

router.post('/sign-in', controller.signInUsers);

router.post('/validate', controller.validateUsers);

module.exports = router;
