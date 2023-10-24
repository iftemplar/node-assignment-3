const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRouter = require('./routes/router');

app.use(bodyParser.urlencoded({extended: false}));

app.use(appRouter);
app.use('/', (req, res, next) => {
    res.send('<h1>This should not work if Router is configured</h1>');
})

app.listen(3000);
