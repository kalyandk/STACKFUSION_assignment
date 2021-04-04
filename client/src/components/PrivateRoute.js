import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const email = localStorage.getItem('email')
  console.log(localStorage.getItem('email'))
  
  return <Route {...rest}
    render={(props) => {
      if (email) {
        return <Component {...props} />
      } else {
          return <Redirect to={{
          pathname: '/user-form',
          state: {from: props.location}
        }} />
      }
    }}
  />
}

export default PrivateRoute