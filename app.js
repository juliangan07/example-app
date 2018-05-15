'use strict';

const express = require('express')
const app = express()

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use('/api/health-check', (req, res) => res.json({up: true}));

// routes
app.use('/', require('./routes'));
// app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    // console.log(res.params);
    res.send('Hello World');
});

// redirect to '/' if no route found
app.use((req, res, next) => {
    // console.log('Page not found, redirecting to index.');
    res.redirect('/');
  });

  module.exports = app;
