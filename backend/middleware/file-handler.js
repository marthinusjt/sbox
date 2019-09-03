'use strict'

const multer = require('multer')

/**
 * This is not actually a middleware.
 * Instead, this provides a function that you can use to wrap endpoint functions
 * in order to support multipart/file upload to that endpoint
 * The text fields from the form will be on req.body.
 * A file will be expected to be uploaded on a field with the provided name.
 *
 * @param {function} handler Endpoint handler
 * @param {String} fileName The name of the form field expected to contain a file.
 * @param {Number} maxSize Maximum file size to accept in bytes.
 *    The handler will respond 400 to requests that have files that are too big.
 * @returns {function} A new handler version of the handler that supports multipart file upload
 */
function fileUploadMiddleware(handler, fileName = 'file', maxSize) {
  let options
  if (maxSize) {
    options = {
      limits: {
        fileSize: maxSize * 1024 * 1024 // Convert from megabytes to bytes
      }
    }
  }

  const upload = multer(options).single(fileName)

  return function handlerWithFileUpload(req, res) {
    upload(req, res, (uploadError) => {
      if (uploadError) {
        return res.status(400).send({
          errors: [
            { code: 'Bad Request', detail: uploadError.message, status: 400 }
          ]
        })
      }
      return handler(req, res)
    })
  }
}

module.exports = {
  fileUploadMiddleware
}
