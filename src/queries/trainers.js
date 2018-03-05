const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const getAllTrainers = (req, res, next) => {
  knex('users')
  .where({
    is_trainer: true
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getTrainerByID = (req, res, next) => {
  knex('users')
  .where({
    id: req.params.id,
    is_trainer: true
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

module.exports = {
  getAllTrainers,
  getTrainerByID,
}
