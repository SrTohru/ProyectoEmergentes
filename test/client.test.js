const Client = require('../Entities/client');


async function runTests() {
    try {

      console.log("\nPrueba con Client...");

      const clientId = await Client.create('John Doe', '555-1234', true);
      console.log(`Cliente creado con ID: ${clientId}`);

      const client = await Client.read(clientId);
      console.log(`Detalles del cliente:`, client);

      await Client.update(clientId, 'John Doe Updated', '555-5678', false);
      console.log('Cliente actualizado.');

      const updatedClient = await Client.read(clientId);
      console.log(`Detalles del cliente actualizado:`, updatedClient);

   //   await Client.delete(clientId);
      console.log('Cliente eliminado.');
    } catch (error) {
        console.error('Error durante las pruebas:', error);
    } finally {
        // Cierra la conexión de la base de datos si es necesario
        process.exit(0);
    }
}

runTests();
