import React, { useState } from 'react'

import './upload.css'
import Snackbar from '../../components/snackbar'
import Button from '../../components/button'

import { createFile } from '../../api/file'

export default function Upload() {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [fileName, setFileName] = useState()

  function uploadFile(e) {
    const file = e.target.files[0]
    createFile(file)
      .then((response) => {
        if (response && response.status === 200) {
          setIsSnackbarOpen(true)
          setFileName(response.data.name)
        }
      })
  }

  function onSnackbarClose(reason) {
    if (reason === 'clickaway') {
      return
    }

    setIsSnackbarOpen(false)
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
        variant='success'
        message={`
          ${fileName ? fileName : 'File'}
          uploaded
        `}
      />
    </>
  )
}

Upload.propTypes = {}
