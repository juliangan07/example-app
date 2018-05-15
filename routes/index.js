'use strict';

const express = require('express');
const router = express.Router();

const title = 'Hello, welcome to this example app';
const url = 'http://www.juliangan07-example-app.com';

router.get('', (req, res, next) => {
    res.send(title);
})

module.exports = router;
