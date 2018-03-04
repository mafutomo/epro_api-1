const express = require('express')
const router = express.Router()
const knex = require('../../knex.js');
const bodyParser = require('body-parser')
const queries = require('../queries/queries.js')

router.use(express.static('public'))

//GET
router.get('/users/', queries.getAllUsers)
router.get('/hormones/monophasic',queries.getAllMonophasic)
router.get('/hormones/non_hormonal',queries.getAllNonHormonal)
router.get('/hormones/triphasic',queries.getAllTriphasic)
router.get('/hormones/progestin',queries.getAllProgestin)
router.get('/users/trainers/', queries.getAllTrainers)
router.get('/users/:id/workouts', queries.getAllWorkoutsForUser)
router.get('/phase_tips/',queries.getAllPhaseTips)
// router.get('/users/:id/workouts/date', queries.getWorkoutsForUserByDate)

//GET by id:
router.get('/users/:id', queries.getUserByID)
router.get('/users/trainers/:id', queries.getTrainerByID)
router.get('/hormones/monophasic/:id',queries.getMonophasicById)
router.get('/hormones/non_hormonal/:id',queries.getNonHormonalById)
router.get('/hormones/triphasic/:id',queries.getTriphasicById)
router.get('/hormones/progestin/:id',queries.getProgestinById)
router.get('/phase_tips/:id',queries.getPhaseTipsById)

//POST
router.post('/users/', queries.createUser)
router.post('/users/:id/workouts/', queries.createWorkout)

module.exports = router
