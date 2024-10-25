const express = require('express');
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
} = require('./user.controller');

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user', getAllUsers);

module.exports = router;
