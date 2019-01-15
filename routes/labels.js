let express = require('express');
let router = express.Router();
let labelsController = require('../public/controllers/labelsController');

router.get('/get', labelsController.getLabels);
router.post('/create', labelsController.createLabel);
router.delete('/delete/:id', labelsController.deleteLabel);
router.put('/update/:id', labelsController.updateLabel);


module.exports = router;