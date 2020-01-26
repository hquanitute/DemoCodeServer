const express = require('express')
const router = express.Router()

let compareJs = require('./javascript/compare');

// middleware that is specific to this router
router.use('/comparejs',compareJs);

module.exports = router