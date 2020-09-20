const express = require('express')
const router = express.Router()

//import controller
const { getTweets, postTweet, deleteTweet } = require('../controllers/tweet')

// routes

// get
router.get('/', getTweets)

// post
router.post('/', postTweet)

// delete
router.delete('/:id', deleteTweet)
module.exports = router;