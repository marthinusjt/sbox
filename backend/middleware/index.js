'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')

const genericError = require('./generic-error')

function applyPreRouteMiddleware(app, LOG) {
  // CORS //
  // Preflight
  app.options('*', cors())
  // CORS Headers for every request
  app.use('*', cors())

  app.use(bodyParser.json())

  // Error Handling
  // These will need to be last

  // This has to come last catches errors from middleware
  app.use(genericError(LOG))

  return app
}

function applyPostRouteMiddleware(app, LOG) {
  // This has to come last catches errors from routes
  app.use(genericError(LOG, 'Unhandled route Error'))

  return app
}

module.exports = {
  applyPreRouteMiddleware,
  applyPostRouteMiddleware
}
