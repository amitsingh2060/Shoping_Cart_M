import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'


function App() {
  return (
    <BrowserRouter>
          <Route  exact path="/" render={props => <Home {...props}/>}/>
          <Route path="/cart" render={props => <Cart {...props}/>}/>
    </BrowserRouter>
  )
}

export default App
