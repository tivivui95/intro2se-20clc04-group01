const exercisesController = require('../controllers/exercisesController');

const router = require('express').Router();

//Add exercises
router.post('/addNewExercises', exercisesController.addExercises);

router.get('/', exercisesController.getAllExercises);

router.get('/:id', exercisesController.getAnExercises);

module.exports = router;
