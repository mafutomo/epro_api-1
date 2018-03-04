const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const testQuery = (req, res, next) => {
  console.log("hello!")
}

const getAllUsers = (req, res, next) => {
  knex('users').then(data => {
    console.log(data);
    res.status(200).send(data)
  })
}

module.exports = {
  testQuery,
  getAllUsers
}
