import 'materialize-css/sass/materialize.scss';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
// import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Login from './pages/Login';
import Approve from './pages/Approve';
import TMDConfigurationContext from './context/TMDConfigurationContext';
import TMDSessionContext from './context/TMDSessionContext';

function App() {
  return (
    <Provider store={store}>
      <TMDConfigurationContext>
        <TMDSessionContext>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/approve">
                <Approve />
              </Route>
              <Route exact path="/movies/:id">
                <Movie />
              </Route>
              {/* <Route exact path="/movies/genre/:genreId">
                asdfasdf
              </Route> */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route>Error</Route>
            </Switch>
          </Router>
        </TMDSessionContext>
      </TMDConfigurationContext>
    </Provider>
  );
}

export default App;
