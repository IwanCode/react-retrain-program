import 'materialize-css/sass/materialize.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
import Genres from './pages/Genres';
import PopularMovies from './pages/PopularMovies';
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
            <div className="main-wrapper">
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
                <Home>
                  <Route component={({ match }) => (
                    <>
                      <Route exact path='/' component={PopularMovies} />
                      <Route exact path='/genres/:id' component={Genres} />
                    </>
                  )} />
                </Home>
                <Route>Error</Route>
              </Switch>
            </div>
            
          </Router>
        </TMDSessionContext>
      </TMDConfigurationContext>
    </Provider>
  );
}

export default App;
