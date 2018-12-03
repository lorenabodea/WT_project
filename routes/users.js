let express = require('express');
let router = express.Router();
let usersController = require('../public/controllers/usersController');

router.get('/get', usersController.getUsers);
router.get('/get/:email', usersController.getOneUser);
router.post('/create', usersController.createUser);
router.put('/update/:email', usersController.updateUser);

module.exports = router;
