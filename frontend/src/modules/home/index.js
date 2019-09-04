import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button'
import Input from '../../components/input'

import './home.css'
import Logo from '../../components/logo'

export default class Home extends PureComponent {
  render() {
    return (
      <div className='home'>
        <Logo className='logo' />
        <input
          accept='image/*'
          style={{ display: 'none' }}
          id='outlined-button-file'
          single
          type='file'
        />
        <label htmlFor='outlined-button-file'>
          <Button type='file' className='upload-button' variant='outlined' size='large' color='primary' component='span'>
            Upload File
          </Button>
        </label>
      </div>
    )
  }
}
Home.propTypes = {}
Home.defaultProps = {}
