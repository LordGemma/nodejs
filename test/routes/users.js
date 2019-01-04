const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const userList = [];

router.get('/', (req, res, next) => {
    const users = userList;
    res.render('users', {
        pageTitle: 'User List',
        path: '/users',
        users
      });
});

router.post('/add-user', (req, res, next) => {
    userList.push({name: req.body.name});
    res.redirect('/users');
});

module.exports = router;