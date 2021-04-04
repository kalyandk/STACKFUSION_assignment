import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Form from './components/Form/Form'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
				<Switch>
					<PrivateRoute path='/' exact component={Home} />
					<Route path='/user-form' exact component={Form} />
				</Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
