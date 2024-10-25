const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { validateAppointment } = require('../utils/validateInput');
const {
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment,
    getAllAppointments
} = require('../controllers/appointment.controller');

router.post('/appointment', authMiddleware, validateAppointment, createAppointment);
router.get('/appointment/:id', authMiddleware, getAppointment);
router.put('/appointment/:id', authMiddleware, validateAppointment, updateAppointment);
router.delete('/appointment/:id', authMiddleware, deleteAppointment);
router.get('/appointment', authMiddleware, getAllAppointments);

module.exports = router;
