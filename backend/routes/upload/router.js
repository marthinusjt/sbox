'use strict'

const express = require('express')
const { fileUploadMiddleware } = require('../../middleware/file-handler')

const router = express.Router()


const createUpload = require('./create-upload')

// File Upload
router.post('/', fileUploadMiddleware(createUpload, 'file', 10))

module.exports = router
