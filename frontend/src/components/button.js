import React, { PureComponent } from 'react'
import MuiButton from '@material-ui/core/Button'


export default class Button extends PureComponent {
  render() {
    return <MuiButton {...this.props} />
  }
}
Button.propTypes = {}
Button.defaultProps = {}
