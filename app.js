const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRouter = require('./routes/router');

app.use(bodyParser.urlencoded({extended: false}));

app.use(appRouter);

app.listen(3000);
