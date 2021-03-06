import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => user ? children : <Redirect to='/signin' />}
    ></Route>
  );
};

export default PrivateRoute;