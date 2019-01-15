let express = require('express');
let router = express.Router();
let companiesController = require('../public/controllers/companiesController');

router.get('/get', companiesController.getCompanies);

module.exports = router;