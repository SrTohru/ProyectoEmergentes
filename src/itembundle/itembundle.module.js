const express = require('express');
const {
    
    addItemToBundle,
    getItemsByBundle,
    getBundlesByItem,
    removeItemFromBundle
} = require('./itembundle.controller');

const router = express.Router();


router.post('/bundle-item', addItemToBundle);
router.get('/bundle/:bundleId/items', getItemsByBundle);
router.get('/item/:itemId/bundles', getBundlesByItem);
router.delete('/bundle-item', removeItemFromBundle);

module.exports = router;
