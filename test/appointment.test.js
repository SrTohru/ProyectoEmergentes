const Appointment = require('./Entities/appointment');


async function runTests() {
    try {

        console.log("Prueba con Appointment...");

        const appointmentId = await Appointment.create('2024-12-25', 3, 'New York', 'Photoshoot');
        console.log(`Cita creada con ID: ${appointmentId}`);

        const appointment = await Appointment.read(appointmentId);
        console.log(`Detalles de la cita:`, appointment);

        await Appointment.update(appointmentId, '2024-12-26', 4, 'Los Angeles', 'Photoshoot updated');
        console.log('Cita actualizada.');

        const updatedAppointment = await Appointment.read(appointmentId);
        console.log(`Detalles de la cita actualizada:`, updatedAppointment);

        await Appointment.delete(appointmentId);
        console.log('Cita eliminada.');

       
  
    } catch (error) {
        console.error('Error durante las pruebas:', error);
    } finally {
        // Cierra la conexión de la base de datos si es necesario
        process.exit(0);
    }
}

runTests();
