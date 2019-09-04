import React, { PureComponent } from 'react'
// import ButtonBase from '@material-ui/core/ButtonBase'

// import { Link } from 'react-router-dom'

export default class Navigation extends PureComponent {
  render() {
    return (
      <nav className='app-nav'>
        {/* Uncomment after finished profile page */}
        {/* <Link to='/'>
          <ButtonBase
            disableRipple
            key='/home'
            style={{ minWidth: '64px', padding: '24px', borderRadius: '2px' }}
          >
            <span className='navigation-button'>
              Home
              <span className='button-mark' />
            </span>
          </ButtonBase>
        </Link>
        <Link to='/profile'>
          <ButtonBase
            disableRipple
            key='/'
            style={{ minWidth: '64px', padding: '24px' }}
          >
            <span className='navigation-button'>
              Profile
              <span className='button-mark' />
            </span>
          </ButtonBase>
        </Link> */}
      </nav>
    )
  }
}
Navigation.propTypes = {}
Navigation.defaultProps = {}
