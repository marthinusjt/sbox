'use strict'

let watching = false

module.exports = function cacheReloader() {
  if (!watching) {
    // eslint-disable-next-line global-require
    const chokidar = require('chokidar')
    const watcher = chokidar.watch([
      './routes/**',
      './services/**'
    ])

    watcher.on('ready', () => {
      watcher.on('all', () => {
        // This is will recreate cache
        // after every file change in ./routes/**
        // If this causes any errors, let's try a more directed approach
        Object.keys(require.cache).forEach((id) => {
          if (!id.match('node_modules')) {
            delete require.cache[id]
          }
        })
      })
    })
  }

  watching = true
}
