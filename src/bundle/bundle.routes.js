const express = require('express');
const {
    createBundle,
    getBundle,
    updateBundle,
    deleteBundle,
    getAllBundles
} = require('./bundle.controller');

const router = express.Router();

router.post('/bundle', createBundle);
router.get('/bundle/:id', getBundle);
router.put('/bundle/:id', updateBundle);
router.delete('/bundle/:id', deleteBundle);
router.get('/bundle', getAllBundles);

module.exports = router;
