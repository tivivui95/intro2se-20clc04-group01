const muscleGroupController = require('../controllers/groupController');

const router = require('express').Router();

router.post('/addMuscleGroup', muscleGroupController.addMuscleGroup);
router.get('/', muscleGroupController.getAllMuscleGroup);
router.get('/:id', muscleGroupController.getAGroup);
router.delete('/del/:id', muscleGroupController.deleteAGroup);
router.put('/update/:id', muscleGroupController.updateAGroup)

module.exports = router;