import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import PrivateRoute from './routes/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={theme}>
          <PrivateRoute exact path="/">
            <Gallery />
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
