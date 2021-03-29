import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import TeamsPage from './pages/TeamsPage'
import UserPage from './pages/UserPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/teams" component={TeamsPage} />
        <Route exact path="/teams/:id" component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
