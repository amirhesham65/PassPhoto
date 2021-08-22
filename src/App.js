import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/routes/SignIn';
import SignUp from './components/routes/SignUp';
import Gallery from './components/routes/Gallery';
import PickPasscode from './components/routes/PickPasscode';

function App() {
  return (
    <Router>
      <Switch>
        <ChakraProvider theme={theme}>
          <PrivateRoute exact path="/">
            <Gallery />
            {/* <PickPasscode /> */}
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
