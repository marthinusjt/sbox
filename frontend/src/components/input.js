import React, { PureComponent } from 'react'
import MuiInput from '@material-ui/core/Button'


export default class Input extends PureComponent {
  render() {
    return <MuiInput {...this.props} />
  }
}
Input.propTypes = {}
Input.defaultProps = {}
