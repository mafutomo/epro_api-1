'use strict';
const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bodyParser = require('body-parser')
const users = require('../queries/users')
const trainers = require('../queries/trainers')
const hormones = require('../queries/hormones')
const workouts = require('../queries/workouts')
const exercises = require('../queries/exercises')
const login = require('../queries/login')

router.use(express.static('public'))

//USERS & TRAINERS
router.post('/login', login.authLogin)
router.get('/users/', users.getAllUsers)
router.get('/users/trainers/', trainers.getAllTrainers)
router.get('/users/trainers/:id', trainers.getTrainerByID)
router.get('/users/:id', users.getUserByID)
router.post('/users/', users.createUser)
router.patch('/users/:id', users.updateUser)
router.delete('/users/:id',users.deleteUser)

//HORMONES
router.get('/hormones/monophasic',hormones.getAllMonophasic)
router.get('/hormones/non_hormonal',hormones.getAllNonHormonal)
router.get('/hormones/triphasic',hormones.getAllTriphasic)
router.get('/hormones/progestin',hormones.getAllProgestin)
router.get('/hormones/monophasic/:id',hormones.getMonophasicById)
router.get('/hormones/non_hormonal/:id',hormones.getNonHormonalById)
router.get('/hormones/triphasic/:id',hormones.getTriphasicById)
router.get('/hormones/progestin/:id',hormones.getProgestinById)
router.get('/phase_tips/',hormones.getAllPhaseTips)
router.get('/phase_tips/:id',hormones.getPhaseTipsById)

//WORKOUTS
router.get('/users/:id/workouts/', workouts.getAllWorkoutsForUser) //dropdown functionality
router.get('/users/:id/workouts/:date', workouts.getWorkoutsForUserByDate)
router.post('/users/:id/workouts/', workouts.createWorkout)
router.delete('/workouts/:id',workouts.deleteWorkout)

//EXERCISES
router.post('/exercises/',exercises.createExercise)
router.patch('/exercises/:id', exercises.updateExercise)
router.delete('/exercises/:id',exercises.deleteExercise)

module.exports = router
