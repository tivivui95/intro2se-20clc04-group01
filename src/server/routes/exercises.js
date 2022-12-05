const exercisesController = require('../controllers/exercisesController');

const router = require('express').Router();

//Add exercises
router.post('/', exercisesController.addExercises);

module.exports = router;
