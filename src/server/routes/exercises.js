const exercisesController = require('../controllers/exercisesController');

const router = require('express').Router();

//Add exercises
router.post('/addNewExercises', exercisesController.addExercises);

router.get('/', exercisesController.getAllExercises);

router.get('/:id', exercisesController.getAnExercises);

router.get('/search/:searchString', exercisesController.searchExercises);

router.put('/update/:id', exercisesController.updateExercises);

router.delete('/del/:id', exercisesController.deleteAnExercises);

module.exports = router;
