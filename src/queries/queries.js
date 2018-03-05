const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')


const getAllMonophasic = (req, res, next) => {
  knex('monophasic_hormones')
    .then(data => {
      res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getAllNonHormonal = (req, res, next) => {
  knex('non_hormonal')
    .then(data => {
      res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getAllTriphasic = (req, res, next) => {
  knex('triphasic_hormones')
    .then(data => {
      res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getAllProgestin = (req, res, next) => {
  knex('progestin_hormones')
    .then(data => {
      res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getAllUsers = (req, res, next) => {
  knex('users')
    .then(data => {
      res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

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

const getAllPhaseTips = (req, res, next) =>{
  knex('phase_tips')
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getMonophasicById = (req, res, next) => {
  knex('monophasic_hormones')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getNonHormonalById = (req, res, next) => {
  knex('non_hormonal')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getTriphasicById = (req, res, next) => {
  knex('triphasic_hormones')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getProgestinById = (req, res, next) => {
  knex('progestin_hormones')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getPhaseTipsById = (req, res, next) =>{
  knex('phase_tips')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
   console.log(err)
  })
}

const getUserByID = (req, res, next) => {
  knex('users')
  .where({
    id: req.params.id
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

const createUser = (req, res, next) => {
  let body = req.body
  //// BCRYPT STUFF >>
  // let salt = bcrypt.genSaltSync(4)
  // let hash = bcrypt.hashSync(body.password, salt)
   knex('users')
     .insert({
       first_name: body.firstName,
       last_name: body.lastName,
       age: body.age,
       weight: body.weight,
       cycle_length: body.cycleLength,
       last_day: body.lastDay,
       email: body.email,
       //// BCRYPT HASH >>
       // password_hash: hash,
       profile_pic: body.profilePic,
       bio: body.bio,
       certifications: body.certifications,
       trainer_id: body.trainer_id,
       is_trainer: body.isTrainer,
       is_public: body.isPublic,
       non_hormonal: body.isNonHormonal,
       triphasic: body.isTriphasic,
       monophasic: body.isMonophasic,
       progestin: body.isProgestin
   }, '*')
   .then(data => {
     res.status(200).send(data)
     //not send all data later
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

 const updateUser = (req, res, next) => {
   //something more friendlier > instead of 404
   if (!req.params.id) res.status(404).send({"error":"user not found"})
   let body = req.body
   knex('users')
   .where({
     id: req.params.id
   })
   .update(body)
   .then(data => {
      res.status(200).send(data)
   })
   .catch(err => {
     console.log(err);
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

 const deleteUser = (req, res, next) => {
   if (!req.params.id) res.sendStatus(404)
   knex('users')
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
  getAllUsers,
  getAllTrainers,
  getAllWorkoutsForUser,
  getWorkoutsForUserByDate,
  getUserByID,
  getTrainerByID,
  getAllMonophasic,
  getAllNonHormonal,
  getAllTriphasic,
  getAllProgestin,
  getMonophasicById,
  getNonHormonalById,
  getTriphasicById,
  getProgestinById,
  getAllPhaseTips,
  getPhaseTipsById,
  createUser,
  createWorkout,
  createExercise,
  updateUser,
  updateExercise,
  deleteUser,
  deleteWorkout,
  deleteExercise,
}
