import { post } from './api'

export function createFile(file) {
  const formData = new FormData()
  formData.append('file', file)

  return post('/upload', formData, true)
    .catch(function handleError(error) {
      if (error.name !== 'ApiError') {
        // let other error continue
        throw error
      }
      console.error('Error while making a post /upload api request')
      console.error(error)
    })
}
