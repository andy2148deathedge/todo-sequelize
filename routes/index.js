const express = require('express');
const router = express.Router();

const home = require('./modules/home'); // import home logic mod
const todos = require('./modules/todos');
const users = require('./modules/users');

const { authenticator } = require('../middleware/auth');

router.use('/todos', todos);
router.use('/users', users);
router.use('/', home);

module.exports = router;