const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')


const getAllMonophasic = (req, res, next) => {
  knex('monophasic_hormones')
    .then(data => {
      res.status(200).send(data)
  })
}

const getAllNonHormonal = (req, res, next) => {
  knex('non_hormonal')
    .then(data => {
      res.status(200).send(data)
  })
}

const getAllTriphasic = (req, res, next) => {
  knex('triphasic_hormones')
    .then(data => {
      res.status(200).send(data)
  })
}

const getAllProgestin = (req, res, next) => {
  knex('progestin_hormones')
    .then(data => {
      res.status(200).send(data)
  })
}

const getAllUsers = (req, res, next) => {
  knex('users')
    .then(data => {
      res.status(200).send(data)
  })
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
  console.log(req.params.id);
  knex('workouts').where({
    'client_id': req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
}

const getAllPhaseTips = (req, res, next) =>{
  knex('phase_tips')
  .then(data => {
    res.status(200).send(data)
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
}

const getNonHormonalById = (req, res, next) => {
  knex('non_hormonal')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
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
}

const getProgestinById = (req, res, next) => {
  knex('progestin_hormones')
  .where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
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
}

const getUserByID = (req, res, next) => {
  knex('users').where({
    id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
}

const getWorkoutsForUserByDate = (req, res, next) => {
  console.log(req.params.date)
  knex('workouts').where({
    client_id: req.params.id,
    date: req.params.date
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
  // bcrypt stuff
  // let salt = bcrypt.genSaltSync(4)
  // let hash = bcrypt.hashSync(req.body.password, salt)
   // knex('users').insert({
   //   first_name: req.body.firstName,
   //   last_name: req.body.lastName,
   //   age: req.body.age,
   //   weight: req.body.weight
   //   cycle_length: req.body.cycleLength,
   //   last_day: req.body.lastDay,
   //   email: req.body.email,
   //   password_hash: hash,
   //   profile_pic: req.body.profilePic,
   //   bio: req.body.bio,
   //   certifications: req.body.certifications,
   //   trainer_id: req.body.trainer_id,
   //   is_trainer: req.body.isTrainer,
   //   is_public: req.body.isPublic,
   //   non_hormonal: req.body.isNonHormonal,
   //   triphasic: req.body.isTriphasic,
   //   monophasic: req.body.isMonophasic,
   //   progestin: req.body.isProgestin
   // }, '*')
   // .then(user => {
   //   res.status(204).send(user)
   // })
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
  createUser
}
