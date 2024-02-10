require("dotenv").config();

const path = require('path');
const logger = require('morgan');
const express = require("express");

const indexRouter = require('./src/router/index');
const quoteRouter = require('./src/router/quotes');
const app = express();

// initialize middleware    
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// use routers
app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/quote', quoteRouter);

// start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});