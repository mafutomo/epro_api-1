const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const getAllWorkoutsForUser = (req, res, next) => {
  console.log(req.params.id);
  knex('workouts')
  .where({
    'client_id': req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}


const getWorkoutsForUserByDate = (req, res, next) => {
  console.log(req.params.date)
  knex('workouts')
  .where({
    client_id: req.params.id,
    date: req.params.date
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}


 const createWorkout = (req, res, next) => {
   let body = req.body
   let userId = req.params.id
   knex('workouts')
   .insert({
      client_id: userId,
      trainer_id: userId,
      date: body.date,
      name: body.name,
      created_by_trainer: body.createdByTrainer
   },'*')
   .then(data => {
     res.status(200).send(data)
   })
   .catch(err => {
    console.log(err)
    })
 }


 const deleteWorkout = (req, res, next) => {
   if (!req.params.id) res.sendStatus(404)
   knex('workouts')
   .where({
     id: req.params.id
   })
   .del()
   .returning('*')
   .then(data => {
     res.status(200).send(data)
   })
   .catch(err => {
    console.log(err)
    })
 }

module.exports = {
  getAllWorkoutsForUser,
  getWorkoutsForUserByDate,
  createWorkout,
  deleteWorkout
}
