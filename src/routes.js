import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Form from './pages/form'

const baseUrl = '/agrotis-desafio-front'

const Routes = () => (
  <BrowserRouter basename={baseUrl} >
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={"/form"} component={Form} />
    </Switch>
  </BrowserRouter>
)

export default Routes
