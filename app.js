const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

let corsOptions = {
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN'],
    exposedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN']
};

const routes = require('./routes/routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
//app.use(express.static(__dirname + "/public"));

app.use(routes);

module.exports = app;







