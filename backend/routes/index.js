'use strict'

const glob = require('glob')
const path = require('path')

// Build Dynamic Routers that can be swapped during runtime
function buildRouter(routerPath) {
  return function callRouter(req, res, next) {
    // eslint-disable-next-line global-require
    require(routerPath)(req, res, next)
  }
}

function applyRoutes(app) {
  glob.sync(`${__dirname}/**/router.js`).forEach((filepath) => {
    const pathObject = path.parse(filepath)
    const route = pathObject.dir.split('/routes')[1]
    app.use(route, buildRouter(filepath))
  })


  return app
}

module.exports = applyRoutes
