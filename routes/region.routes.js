const express = require('express')
const router = express.Router()
const {regionDetails} = require('../controllers/region.controllers')


router.get('/details/:region', regionDetails)


module.exports = router