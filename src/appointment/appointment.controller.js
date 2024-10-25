const appointmentService = require('./appointment.service');

exports.createAppointment = async (req, res) => {
    const { date, hours, place, description } = req.body;
    try {
        const id = await appointmentService.create(date, hours, place, description);
        res.status(201).json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await appointmentService.findOne(id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAppointment = async (req, res) => {
    const { id } = req.params;
    const { date, hours, place, description } = req.body;
    try {
        await appointmentService.update(id, date, hours, place, description);
        res.json({ message: 'Appointment updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        await appointmentService.delete(id);
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.findAll();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
