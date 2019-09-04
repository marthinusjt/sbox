import React, { PureComponent } from 'react'
import './app.css'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import Router from './router'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#363636' }
  }
})


export default class App extends PureComponent {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </>
    )
  }
}
