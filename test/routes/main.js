const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('main', {
        pageTitle: 'Main Page',
        path: '/main'
    })
});

module.exports = router;