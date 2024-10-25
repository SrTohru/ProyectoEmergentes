const express = require('express');
const app = express();

// Importar rutas
const appointmentRoutes = require('./appointment/appointment.routes');
const bundleRoutes = require('./bundle/bundle.routes');
const bundleItemRoutes = require('./bundleitem/bundleitem.routes');
const clientRoutes = require('./client/client.routes');
const contractRoutes = require('./contract/contract.routes');
const itemRoutes = require('./item/item.routes');
const itemBundleRoutes = require('./itembundle/itembundle.routes');

// Usar rutas
app.use('/api/appointments', appointmentRoutes);
app.use('/api/bundles', bundleRoutes);
app.use('/api/bundleitems', bundleItemRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/itembundles', itemBundleRoutes);

