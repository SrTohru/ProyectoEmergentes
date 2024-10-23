const bundle = require('../Entities/bundle');

 async function runTests() {
     try {

  console.log("\nPrueba con Bundle...");

  const bundleId = await bundle.create('Wedding Package', 500);
  console.log(`Paquete creado con ID: ${bundleId}`);

  const bundle = await bundle.read(bundleId);
  console.log(`Detalles del paquete:`, bundle);

  await Bundle.update(bundleId, 'Wedding Package Updated', 600);
  console.log('Paquete actualizado.');

  const updatedBundle = await bundle.read(bundleId);
  console.log(`Detalles del paquete actualizado:`, updatedBundle);

  await bundle.delete(bundleId);
  console.log('Paquete eliminado.');
  
     } catch (error) {
         console.error('Error durante las pruebas:', error);
     } finally {
         // Cierra la conexión de la base de datos si es necesario
         process.exit(0);
     }
 }

 runTests();
 