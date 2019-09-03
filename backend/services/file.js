'use strict'

const uuidv4 = require('uuid/v4')


// Promise delay function
// Pass milliseconds to resolve promise after time
function delay(ms, v) {
  return new Promise((resolve) => (
    setTimeout(resolve.bind(null, v), ms)
  ))
}

// This is a mock function that mimics an upload to a server based on file size
// This doesn't do anything besides fake a wait time
module.exports.create = function create(file) {
  const millisecondDelay = Math.floor(Math.random() * 1000 + 1)
  console.log(file)

  const mockFileDatabaseRecord = {
    id: uuidv4(),
    name: file.originalname,
    type: file.mimetype,
    bytes: file.buffer.length,
    encoding: file.encoding
  }

  return delay(millisecondDelay).then(() => (mockFileDatabaseRecord))
}
