'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const router = require('./src/routes/routes.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join('public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', router)

app.use((err, req, res, next) => {
  res.status(500).json({"error": err});
})

app.use((req, res, next) => {
  res.status(404).json({"error": {"message" : "404! Page not found!"}})
})

app.listen(port, () => {
  console.log(`listening to ${port}`)
})

module.exports = app;
