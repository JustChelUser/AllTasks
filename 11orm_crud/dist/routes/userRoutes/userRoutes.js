"use strict";
const createUser = require('./createUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const listUsers = require('./listUsers');
const updateUser = require('./updateUser');
const express = require('express');
const router = express.Router();
router.get('/', listUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;
//# sourceMappingURL=userRoutes.js.map