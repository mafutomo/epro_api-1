const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')


const getAllUsers = (req, res, next) => {
  knex('users').then(data => {
    res.status(200).send(data)
  })
}

const getHormones = (req, res, next) => {
  console.log('getHormones')
}

const getAllTrainers = (req, res, next) => {
  knex('users').where({
    is_trainer: true
  })
  .then(data => {
    res.status(200).send(data)
  })
}

const getAllWorkoutsForUser = (req, res, next) => {
  console.log('getAllWorkoutsForUser');
}

const getWorkoutsForUserByDate = (req, res, next) => {
  console.log('getWorkoutsForUserByDate');
}

const getUserByID = (req, res, next) => {
  knex('users').where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
}

const getTrainerByID = (req, res, next) => {
  knex('users').where({
    id: req.params.id,
    is_trainer: true
  })
  .then(data => {
    res.status(200).send(data)
  })
}

const createUser = (req, res, next) => {
  console.log('createUser')
  // bcrypt stuff
  // let salt = bcrypt.genSaltSync(4)
  // let hash = bcrypt.hashSync(req.body.password, salt)
  //  knex('users').insert({
  //
  //  }, '*')
  //  .then(user = > {
  //    res.status(204).send({
  //
  //    })
  //  })
}


module.exports = {
  getAllUsers,
  getHormones,
  getAllTrainers,
  getAllWorkoutsForUser,
  getWorkoutsForUserByDate,
  getUserByID,
  getTrainerByID,
  createUser
}
