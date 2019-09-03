'use strict'


// This is a mock function that mimics an upload to a server based on file size
// This doesn't do anything besides fake a wait time
module.exports.create = function create() {
  setTimeout(() => {}, Math.floor(Math.random() * 1000 + 1))
  return Promise.resolve()
}
