'use strict'

const { create } = require('../../services/file')

module.exports = function createOrganizationFile(req, res) {
  if (!req.file) {
    return res.status(400).send({
      errors: [
        { code: 'Bad Request', detail: 'No file uploaded', status: 400 }
      ]
    })
  }

  return create(req.file).then(() => (
    res.status(200).send({
      id: req.params.uuid
    })
  ))
}
