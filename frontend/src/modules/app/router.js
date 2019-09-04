import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './navigation'
import Home from '../home'
import Profile from '../profile'

function AppRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='app'>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
