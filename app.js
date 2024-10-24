const express = require('express');
const app = express();

// Cargar variables de entorno desde el archivo .env
const dotenv = require('dotenv');
dotenv.config();

// Middleware para analizar JSON
app.use(express.json());


const bundleRoutes = require('./bundle/bundle.module.js');
app.use('/api',bundleRoutes);

const clientRoutes = require('./client/client.module.js');
app.use('/api',clientRoutes);

const bundleItemRoutes = require('./itembundle/itembundle.module.js');
app.use('/api', bundleItemRoutes);

const itemRoutes = require('./item/item.module.js');
app.use('/api',itemRoutes);

const port = 3000//process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
