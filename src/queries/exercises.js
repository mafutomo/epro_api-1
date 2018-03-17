const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')

const createUserExercise = (req, res, next) => {
  var body = req.body
  console.log(req.params);
  console.log(req.body);
  knex('exercises')
  .insert({
    name: body.name,
    sets: body.sets,
    reps: body.reps,
    weight: body.weight,
    time: body.time,
  },'*')
  //some if logic that would evaluate in the workouts table if a date already exists -- then to jump ahead an create the join data.

  //if not then create the workout and then create the join data.
  .then( data => {
    var newExerciseID = data[0].id
    console.log("New Exercise Data = ",data);

    knex.select('*')
    .where({
      date: req.params.date,
      client_id: req.params.id,
    })
    .from('workouts')
    .then(data => {
      console.log("this is DATA",data);
      if(!data.length) {

        console.log("THIS IS NONE");
        knex('workouts')
        .insert({
           client_id: req.params.id,
           trainer_id: req.params.id,
           date: req.params.date,
           created_by_trainer: false,
        },'*')
        .then( data => {
            var newWorkoutID = data[0].id
            console.log("#2 ==>",data);
            knex('workouts_exercises')
            .insert({
              workout_id: newWorkoutID,
              exercise_id: newExerciseID,
            },'*')
            .then( data => {
              knex('exercises')
              .where({
                id: newExerciseID,
              })
              .then(data => {
                  res.status(200).send(data)
              })
              .catch(err => {
                  console.log(err);
              })
            })
            .catch( err => {
              console.log(err);
            })
        })

      } else {

        var existingWorkoutID = data[0].id

          knex('workouts_exercises')
          .insert({
            workout_id: existingWorkoutID,
            exercise_id: newExerciseID,
          },'*')
          .then(data => {
            console.log("Join Data! ==>", data)
            knex('exercises')
            .where({
              id: newExerciseID,
            })
            .then(data => {
              res.status(200).send(data)
            })
            .catch(err => {
              console.log(err);
            })

          })
      }

    })
    .catch(err => {
      console.log(err);
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
  if (!req.params.exercise_id) res.sendStatus({"error":"exercise not found"})
  knex("workouts_exercises")
    .where({
      id: req.params.workout_exercise_id
    })
    .del()
    .returning('*')
    .then( joinData => {
      res.status(200).send(joinData)
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
