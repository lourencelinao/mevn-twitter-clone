const express = require('express')
const router = express.Router()

// import controller
const { getUsers } = require('../controllers/user')
// routes
router.get('/', getUsers)

module.exports = router;