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
  knex('workouts')
  .where({
    client_id: req.params.id,
    date: req.params.date
  })
  .select('workouts.id','workouts.date','workouts.client_id')
  .then(workouts => {
    // console.log(workouts);
    let promises = workouts.map(workout => {
      // console.log(workout);
      return knex('exercises')
      .select('*')
      .join('workouts_exercises','exercises.id','workouts_exercises.exercise_id')
      .where('workouts_exercises.workout_id',workout.id)
      .select('*')
      .then( exercises => {
        workout.exercises = exercises
        console.log(workout)
        return workout
      })
      .catch(err => {
        console.log(err)
      })
    })

    Promise.all(promises).then(data => {
       res.status(200).json(data)
     })
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
   knex('workouts_exercises')
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
  deleteWorkout,
}
