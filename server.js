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


app.use(express.static(path.join('public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', router)



app.listen(port, () => {
  console.log(`listening to ${port}`)
})

module.exports = app;
