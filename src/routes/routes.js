'use strict';

const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')
const queries = require('../queries/queries')

router.use(express.static('public'))

//CREATE
router.post('/users/', queries.createUser)
router.post('/users/:id/workouts/', queries.createWorkout)
router.post('/exercises/',queries.createExercise)

//READ
router.get('/users/', queries.getAllUsers)
router.get('/hormones/monophasic',queries.getAllMonophasic)
router.get('/hormones/non_hormonal',queries.getAllNonHormonal)
router.get('/hormones/triphasic',queries.getAllTriphasic)
router.get('/hormones/progestin',queries.getAllProgestin)
router.get('/users/trainers/', queries.getAllTrainers)
router.get('/users/:id/workouts/', queries.getAllWorkoutsForUser) //dropdown functionality
router.get('/phase_tips/',queries.getAllPhaseTips)
router.get('/users/:id/workouts/:date', queries.getWorkoutsForUserByDate)

//READ by id
router.get('/users/:id', queries.getUserByID)
router.get('/users/trainers/:id', queries.getTrainerByID)
router.get('/hormones/monophasic/:id',queries.getMonophasicById)
router.get('/hormones/non_hormonal/:id',queries.getNonHormonalById)
router.get('/hormones/triphasic/:id',queries.getTriphasicById)
router.get('/hormones/progestin/:id',queries.getProgestinById)
router.get('/phase_tips/:id',queries.getPhaseTipsById)

//UPDATE
router.patch('/users/:id', queries.updateUser)
router.patch('/exercises/:id', queries.updateExercise)

//DELETE
router.delete('/users/:id',queries.deleteUser)
router.delete('/workouts/:id',queries.deleteWorkout)
router.delete('/exercises/:id',queries.deleteExercise)

module.exports = router
