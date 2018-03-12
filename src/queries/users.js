const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getAllUsers = (req, res, next) => {
  knex('users')
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

const createUser = (req, res, next) => {
  let body = req.body
  let salt = bcrypt.genSaltSync(4)
  let hash = bcrypt.hashSync(body.password, salt)
   knex('users')
     .insert({
       first_name: body.firstName,
       last_name: body.lastName,
       age: body.age,
       weight: body.weight,
       cycle_length: body.cycleLength,
       last_day: body.lastDay,
       email: body.email,
       secret: process.env.TOKEN_SECRET,
       password_hash: hash,
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

 const deleteUser = (req, res, next) => {
   if (!req.params.id) res.sendStatus({"error":"user not found"})
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

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
}
