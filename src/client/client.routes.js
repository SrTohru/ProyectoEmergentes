const express = require('express');
const {ClientController} = require('./client.controller.js')

const cc = new ClientController();

const router = express.Router();

router.post('/client', cc.createClient.bind(cc));
router.get('/client/:id', cc.getClient.bind(cc));
router.put('/client/:id', cc.updateClient.bind(cc));
router.delete('/client/:id',cc.deleteClient.bind(cc));
router.get('/client', cc.getAllClient.bind(cc));

module.exports = router;
