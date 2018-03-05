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



module.exports = {
  getAllNonHormonal,
  getAllMonophasic,
  getAllProgestin,
  getAllTriphasic,
  getAllPhaseTips,
  getNonHormonalById,
  getMonophasicById,
  getProgestinById,
  getTriphasicById,
  getPhaseTipsById
}
