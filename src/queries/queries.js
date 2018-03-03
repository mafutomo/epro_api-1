const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const testQuery = (req, res, next) => {
  console.log("hello!")
}


module.exports = {
  testQuery,
}
