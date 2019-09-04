/**
 * @typedef {('post'|'put'|'patch'|'get'|'delete')} HttpMethod
 */

const API_URL = process.env.REACT_APP_API_URL

export class ApiError extends Error {
  constructor(error) {
    super(error)
    this.name = 'ApiError'
    this.fullError = error
    console.error(`Api handled an error: ${JSON.stringify(error)}`)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}


/**
 * Creates the fetch options to pass to the whatwg-fetch
 * @param {HttpMethod} method - The HTTP method
 * @param {Object} data - The json data, if any, to send with the request. Note must be JSON serializable
 * @param {Boolean} isFile - Creates the options to pass to the fetch() method for multipart/form-data to post files.
 */
function createFetchOptions(method, data, isFile) {
  const headers = {}

  const opts = {
    method,
    headers,
    mode: 'cors'
  }

  if (data) {
    headers['Content-Type'] = 'application/json'
    opts.body = JSON.stringify(data)
  }

  if (isFile) {
    delete headers['Content-Type']
    opts.body = data
  }

  return opts
}

function createResponse(fetchPromise, options = {}) {
  let status
  let ok
  let data

  return fetchPromise
    .then(function handleResponse(response) {
      status = response.status
      ok = response.ok

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return response.json() // Returns an object
      }

      // Using .blob() as our fallback handles several file types
      return response.blob()
    })
    .then(function handleData(responseData) {
      data = responseData
      return { status, ok, data }
    })
    .catch(function handleApiError(error) {
      throw new ApiError(error)
    })
}

/**
 * @param {String} uri - The URI of the resource to GET
 * @param {Object} options - Use to override the default fetch options
 */
export function get(path, options = {}) {
  return createResponse(
    fetch(`${API_URL}${path}`, createFetchOptions('get', undefined)),
    options
  )
}

/**
 * @param {String} uri - The URI of the resource to POST
 * @param {Object} data - The data to post. Must be JSON serializable
 */
export function post(path, data, isFile = false) {
  return createResponse(fetch(`${API_URL}${path}`, createFetchOptions('post', data, isFile)))
}

/**
 * @param {String} uri - The URI of the resource to PATCH
 * @param {Object} data - The data to post. Must be JSON serializable
 */
export function patch(path, data) {
  return createResponse(fetch(`${API_URL}${path}`, createFetchOptions('PATCH', data)))
}

/**
 * @param {String} uri - The URI of the resource to DELETE
 * @param {Object} data - The data to post. Must be JSON serializable
 */
export function del(path) {
  return createResponse(fetch(`${API_URL}${path}`, createFetchOptions('delete', undefined)))
}
