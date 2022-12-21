const router = require('express').Router()

const userController = require('../controllers/userController');

// [POST] COMMENTS AND RATING  
router.post('/comment', userController.commentAndRate);
// GET ALL USER
router.get('/', userController.getAllUsers); 

module.exports = router;