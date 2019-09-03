'use strict'

function genericError(context = 'Unhandled middleware error') {
  return function genericErrorHandler(err, req, res, next) {
    if (!res.headersSent && err) {
      console.error('Unhandled Error', err, context)
      res.status(500).send({ errors: [{ status: 500, code: 'Server Error' }] })
    } else {
      next()
    }
  }
}

module.exports = genericError
