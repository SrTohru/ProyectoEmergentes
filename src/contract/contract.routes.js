// routes.js
const express = require('express');
const { ContractController } = require('./contract.controller');

const cc = new ContractController();

const router = express.Router();

router.post('/contracts', cc.createContract.bind(cc));
router.get('/contracts/:id', cc.getContract.bind(cc));
router.put('/contracts/:id', cc.updateContract.bind(cc));
router.delete('/contracts/:id', cc.deleteContract.bind(cc));
router.get('/contracts', cc.getAllContracts.bind(cc));

module.exports = router;
