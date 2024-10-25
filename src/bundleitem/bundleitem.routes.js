const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { validateBundleItem } = require('../utils/validateInput');
const {
    createBundleItem,
    getBundleItem,
    updateBundleItem,
    deleteBundleItem,
    getAllBundleItems
} = require('../controllers/bundleItem.controller');

router.post('/bundleItem', authMiddleware, validateBundleItem, createBundleItem);
router.get('/bundleItem/:id', authMiddleware, getBundleItem);
router.put('/bundleItem/:id', authMiddleware, validateBundleItem, updateBundleItem);
router.delete('/bundleItem/:id', authMiddleware, deleteBundleItem);
router.get('/bundleItem', authMiddleware, getAllBundleItems);

module.exports = router;
