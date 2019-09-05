import React, { PureComponent } from 'react'

import './home.css'
import Logo from '../../components/logo'

import Upload from '../upload'

export default class Home extends PureComponent {
  render() {
    return (
      <div className='home'>
        <Logo className='logo' />
        <Upload />
      </div>
    )
  }
}
Home.propTypes = {}
Home.defaultProps = {}
