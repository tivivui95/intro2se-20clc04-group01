const muscleGroupController = require('../controllers/groupController');

const router = require('express').Router();

router.post('/addMuscleGroup', muscleGroupController.addMuscleGroup);
router.get('/', muscleGroupController.getAllMuscleGroup);
router.get('/:id', muscleGroupController.getAGroup);

module.exports = router;