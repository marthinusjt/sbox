import React from 'react'
import Snackbar from '../../components/snackbar'
import Button from '../../components/button'

import './home.css'
import Logo from '../../components/logo'

import { createFile } from '../../api/file'

function Home () {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false)
  const [snackbarMessage, setSnackbarMessage] = React.useState('')
  const [snackbarVariant, setSnackbarVariant] = React.useState('success')

  function uploadFile(e) {
    const file = e.target.files[0]
    e.target.value = null;
    
    if (file.size >= 10 * 1024 * 1024) {
      console.log('aborted')
      setIsSnackbarOpen(true)
      setSnackbarMessage('File too large')
      setSnackbarVariant('error')
        return
    }

    createFile(file)
      .then((response) => {
        if (response && response.status === 200) {
          // Handle no file name
          const fileName = response.data.fileName
          ? response.data.fileName
          : 'File'

          setIsSnackbarOpen(true)
          setSnackbarMessage(`${fileName} Uploaded`)
          setSnackbarVariant('success')
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
      <div className='home'>
        <Logo className='logo' />
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
      </div>
    )
  }

Home.propTypes = {}
Home.defaultProps = {}

export default Home;