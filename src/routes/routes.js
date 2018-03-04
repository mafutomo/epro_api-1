const express = require('express')
const router = express.Router()
const knex = require('../../knex.js');
const bodyParser = require('body-parser')
const queries = require('../queries/queries.js')

router.use(express.static('public'))

//GET
router.get('/users/', queries.getAllUsers)
router.get('/hormones/',queries.getHormones)
router.get('/users/trainers/', queries.getAllTrainers)
router.get('/users/:id/workouts', queries.getAllWorkoutsForUser)
router.get('/users/:id/workouts/date', queries.getWorkoutsForUserByDate)


//GET by id:
router.get('/users/:id', queries.getUserByID)

//POST
router.post('/users/', queries.createUser)




module.exports = router
