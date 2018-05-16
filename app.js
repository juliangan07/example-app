'use strict';

const express = require('express')
const app = express()
const parser = require('body-parser');
const QueryService = require('./services/query');

app.set('port', (process.env.PORT || 3000));
const port = app.get('port');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/api/health-check', (req, res) => res.json({up: true}));


//middleware
app.use(parser.urlencoded({extended : true}));
app.use(parser.json());

// routes
// app.use('/', require('./routes'));
// app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    console.log(req);
    const queryService = new QueryService(req.query);
    const response = queryService.getAnswer();
    res.send(response);
});

// app.post('/', (req, res) => {
//     const queryService = new QueryService(req.body);
//     const response = queryService.getAnswer();
//     res.send(response);
// });

app.use((req, res, next) => {
    console.log('Redirecting to index.');
    res.redirect('/');
  });

  module.exports = app;
