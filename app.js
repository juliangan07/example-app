'use strict';

const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3000));
console.log(process.env);
const port = app.get('port');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/api/health-check', (req, res) => res.json({up: true}));

// routes
// app.use('/', require('./routes'));
// app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    console.log(res.params);
    res.send('OK');
});

app.use((req, res, next) => {
    console.log('Rredirecting to index.');
    res.redirect('/');
  });

  module.exports = app;
