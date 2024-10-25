const express = require('express');
const {
    createItem,
    getItem,
    updateItem,
    deleteItem,
    getAllItems
} = require('./item.controller');

const router = express.Router();

router.post('/item', createItem);
router.get('/item/:id', getItem);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);
router.get('/item', getAllItems);

module.exports = router;
