let express = require('express');
let router = express.Router();
let appointmentsController = require('../public/controllers/appointmentsController');

router.get('/get', appointmentsController.getAppointments);
router.post('/create', appointmentsController.createAppointment);
router.post('/update/:title', appointmentsController.updateAppointment);
router.post('/changePrivacy', appointmentsController.changePrivacy);
router.delete('/delete/:id', appointmentsController.deleteAppointment);

module.exports = router;