const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = express.Router();

router.get('/api/users', getUsers);

router.get('/api/users/:id', getUserById);

router.post('/api/users', createUser);

router.put('/api/users/:id', updateUser);

router.delete('/api/users/:id', deleteUser);

module.exports = router;