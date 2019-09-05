import React, { useState } from 'react'

import './upload.css'
import Snackbar from '../../components/snackbar'
import Button from '../../components/button'

import { createFile } from '../../api/file'

const MAX_FILE_SIZE = 10 // MegaBytes

function isFileTooLarge(fileSize) {
  return fileSize > (MAX_FILE_SIZE  * 1024 * 1024)
}

export default function Upload() {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [snackbarVariant, setSnackbarVariant] = useState('success')
  const [snackbarMessage, setSnackbarMessage] = useState('')

  function uploadFile(e) {
    const file = e.target.files[0]
    // Clear target so user can upload the same file again
    e.target.value = null
    if (isFileTooLarge(file.size)) {
      const fileName = file.name ? file.name : 'File'

      setSnackbarVariant('error')
      setIsSnackbarOpen(true)
      setSnackbarMessage(`
        ${fileName} (${(file.size / 1024 / 1024).toFixed(2)} MB)
        exceeds max file size (${MAX_FILE_SIZE} MB)
      `)
      return
    }

    createFile(file)
      .then((response) => {
        if (response && response.status === 200) {
          const fileName = response.data.name ? response.data.name : 'File'
          setIsSnackbarOpen(true)
          setSnackbarVariant('success')
          setSnackbarMessage(`${fileName} uploaded`)
        }
      })
  }

  function onSnackbarClose(reason) {
    if (reason === 'clickaway') {
      return
    }

    setIsSnackbarOpen(false)
    setSnackbarMessage('')
  }

  return (
    <>
      <input
        accept='*'
        style={{ display: 'none' }}
        id='outlined-button-file'
        type='file'
        onChange={uploadFile}
      />
      <label htmlFor='outlined-button-file'>
        <Button
          className='upload-button'
          variant='outlined'
          size='large'
          color='primary'
          component='span'
        >
          Upload File
        </Button>
      </label>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
        variant={snackbarVariant}
        message={snackbarMessage}
      />
    </>
  )
}

Upload.propTypes = {}
