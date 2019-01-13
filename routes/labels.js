let express = require('express');
let router = express.Router();
let labelsController = require('../public/controllers/labelsController');

router.get('/get', labelsController.getLabels);
router.post('/create', labelsController.createLabel);
router.delete('/delete', labelsController.deleteLabel);
router.put('/update/:description', labelsController.updateLabel);


module.exports = router;