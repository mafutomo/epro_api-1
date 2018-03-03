const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bodyParser = require('body-parser')
const queries = require('../queries/queries.js')

router.use(express.static('public'))

router.get('/test/', queries.testQuery)


module.exports = router
