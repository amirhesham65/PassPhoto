import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, theme, Button } from '@chakra-ui/react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './routes/PrivateRoute';

import { useAuth } from './hooks/useAuth';

function App() {
  // TODO: To be deleted
  const { user, signOut } = useAuth();
  const logoutUser = () => signOut();

  return (
    <Router>
      <Switch>
        <ChakraProvider theme={theme}>
          <PrivateRoute exact path="/">
            <p>Hello! {user && user.email}</p>
            <Button onClick={() => logoutUser()}>
              Logout
            </Button>
          </PrivateRoute>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </ChakraProvider>
      </Switch>
    </Router>
  );
}

export default App;
