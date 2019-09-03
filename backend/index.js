'use strict'

const ENV = process.env.ENVIRONMENT || 'dev'
const PORT = process.env.PORT || 3031

const dotenv = require('dotenv').config({ path: `./.env.${ENV}` }) // eslint-disable-line no-unused-vars
const express = require('express')
const {
  applyPreRouteMiddleware,
  applyPostRouteMiddleware
} = require('./middleware')
const applyRoutes = require('./routes')
const cacheReloader = require('./hot-reload')

function startServer() {
  const app = express()
  applyPreRouteMiddleware(app)
  applyRoutes(app)
  applyPostRouteMiddleware(app)

  const server = app.listen(PORT, () => {
    console.log(`Sbox API server listening on port ${PORT}`)
  })

  return { server, app }
}

// Lazy loading through cache invalidation
if (ENV === 'dev') {
  cacheReloader()
}

startServer()
