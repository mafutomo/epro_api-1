const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')


const getAllUsers = (req, res, next) => {
  knex('users').then(data => {
    console.log(data);
    res.status(200).send(data)
  })
}

const getUserByID = (req, res, next) => {
  knex('users').where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
}

module.exports = {
  getAllUsers,
  getUserByID
}
