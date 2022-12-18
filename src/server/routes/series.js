const seriesController = require('../controllers/seriesController');

const router = require('express').Router();

router.post('/addNewSeries', seriesController.addSeries);
router.get('/', seriesController.getAllSeries);
router.get('/:id', seriesController.getASeries);
router.delete('/del/:id', seriesController.deleteASeries);
router.put('/update/:id', seriesController.updateASeries)

module.exports = router;