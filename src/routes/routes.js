const express = require('express')
const router = express.Router()
const knex = require('../../knex.js');
const bodyParser = require('body-parser')
const queries = require('../queries/queries.js')

router.use(express.static('public'))

router.get('/test/', queries.testQuery)

//GET
router.get('/users/', queries.getAllUsers)
router.get('/hormones/',queries.getHormones)
router.get('/users/', queries.getAllTrainers)
router.get('/users/:id/workouts', queries.getAllWorkoutsForUser)
router.get('/users/:id/workouts/date', queries.getWorkoutsForUserByDate)


module.exports = router
