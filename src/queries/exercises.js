const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const createUserExercise = (req, res, next) => {
  console.log(req.params);
  let body = req.body
  console.log(req.body);
  knex('exercises')
  //exercises
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
  .then( data => {
    console.log("#1 ==>",data);
    var exerciseID = data[0].id
    console.log(data[0].id);
    knex('workouts')
    .insert({
       client_id: req.params.id,
       trainer_id: req.params.id,
       date: req.params.date,
       created_by_trainer: false,
    },'*')
    .then(data => {
      var workoutID = data[0].id
      console.log("#2 ==>",data);
      knex('workouts_exercises')
      .insert({
        workout_id: workoutID,
        exercise_id:exerciseID,
      },'*')
      .then(data => {
        console.log("#3 ==>", data);
        res.status(200).send(data)
      })
      .catch(err => {
       console.log(err)
       })
    })
  })

}

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
  if (!req.params.id) res.sendStatus({"error":"exercise not found"})
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
  if (!req.params.id) res.sendStatus({"error":"exercise not found"})
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
  deleteExercise,
  createUserExercise
}
