'use strict'

const express = require('express')

const router = express.Router()

// File Upload
router.get('/', (req, res) => {
  res.status('200').send('Ok')
})

module.exports = router
