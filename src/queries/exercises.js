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
    knex('workouts')
    .where({
      date: req.params.date,
      client_id: req.params.id,
    })
    .then(data => {

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

        })
    })
    .catch(err => {
      console.log(err);
    })


    // console.log("#1 ==>",data);
    // var exerciseID = data[0].id
    // console.log(data[0].id);
    // knex('workouts')
    // .insert({
    //    client_id: req.params.id,
    //    trainer_id: req.params.id,
    //    date: req.params.date,
    //    created_by_trainer: false,
    // },'*')
    //
    // .then(data => {
    //   var workoutID = data[0].id
    //   console.log("#2 ==>",data);
    //   knex('workouts_exercises')
    //   .insert({
    //     workout_id: workoutID,
    //     exercise_id:exerciseID,
    //   },'*')
    //   .then(data => {
    //     console.log("#3 ==>", data);
    //     res.status(200).send(data)
    //   })
    //   .catch(err => {
    //    console.log(err)
    //    })
    // })
  })

}

//anonymous {
//   id: 7,
//   date: 2018-03-16T06:00:00.000Z,
//   client_id: 1,
//   exercises:
//    [ anonymous {
//        id: 13,
//        name: 'Ab Roller',
//        description: '',
//        sets: 0,
//        sets_actual: 0,
//        reps: 0,
//        reps_actual: 0,
//        weight: 0,
//        weight_actual: 0,
//        time: '0',
//        time_actual: 0,
//        created_at: 2018-03-15T05:52:45.573Z,
//        updated_at: 2018-03-15T05:52:45.573Z,
//        workout_id: 7,
//        exercise_id: 1 },
//      anonymous {
//        id: 12,
//        name: 'Campus Board Ladder',
//        description: '',
//        sets: 0,
//        sets_actual: 0,
//        reps: 0,
//        reps_actual: 0,
//        weight: 0,
//        weight_actual: 0,
//        time: '0',
//        time_actual: 0,
//        created_at: 2018-03-15T05:52:45.573Z,
//        updated_at: 2018-03-15T05:52:45.573Z,
//        workout_id: 7,
//        exercise_id: 15 } ] }
// anonymous {
//   id: 11,
//   date: 2018-03-16T06:00:00.000Z,
//   client_id: 1,
//   exercises:
//    [ anonymous {
//        id: 16,
//        name: 'Squats',
//        description: null,
//        sets: 1,
//        sets_actual: null,
//        reps: 3,
//        reps_actual: null,
//        weight: 150,
//        weight_actual: null,
//        time: '01:00',
//        time_actual: null,
//        created_at: 2018-03-16T05:03:12.289Z,
//        updated_at: 2018-03-16T05:03:12.289Z,
//        workout_id: 11,
//        exercise_id: 126 } ] }
// anonymous {
//   id: 10,
//   date: 2018-03-16T06:00:00.000Z,
//   client_id: 1,
//   exercises:
//    [ anonymous {
//        id: 15,
//        name: 'Squats',
//        description: null,
//        sets: 1,
//        sets_actual: null,
//        reps: 3,
//        reps_actual: null,
//        weight: 150,
//        weight_actual: null,
//        time: '01:00',
//        time_actual: null,
//        created_at: 2018-03-16T05:00:26.401Z,
//        updated_at: 2018-03-16T05:00:26.401Z,
//        workout_id: 10,
//        exercise_id: 125 } ] }

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
