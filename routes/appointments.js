let express = require('express');
let router = express.Router();
let appointmentsController = require('../public/controllers/appointmentsController');

router.get('/get', appointmentsController.getAppointments);
router.post('/create', appointmentsController.createAppointment);
router.delete('/delete', appointmentsController.deleteAppointment);
router.post('/changePrivacy', appointmentsController.changePrivacy);

module.exports = router;