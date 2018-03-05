const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const createExercise = (req, res, next) => {
  let body = req.body
  knex('exercises')
  .insert({
     name: body.name,
     description: body.description,
     sets: body.sets,
     sets_actual: body.setsActual,
     reps: body.reps,
     reps_actual: body.repsActual,
     weight: body.weight,
     weight_actual: body.weightActual,
     time: body.time,
     time_actual: body.timeActual
  },'*')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
   })
}

const updateExercise = (req, res, next) => {
  if (!req.params.id) res.sendStatus(404)
  let body = req.body
  knex('exercises')
  .where({
    id : req.params.id
  })
  .update({
     name: body.name,
     description: body.description,
     sets: body.sets,
     sets_actual: body.setsActual,
     reps: body.reps,
     reps_actual: body.repsActual,
     weight: body.weight,
     weight_actual: body.weightActual,
     time: body.time,
     time_actual: body.timeActual
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const deleteExercise = (req, res, next) => {
  if (!req.params.id) res.sendStatus(404)
  knex('exercises')
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
  createExercise,
  updateExercise,
  deleteExercise
}
