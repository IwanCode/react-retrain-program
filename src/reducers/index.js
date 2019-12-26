import { combineReducers } from 'redux';
import { movies } from './movies.reducer';
import { genres } from './genres.reducer';

const rootReducer = combineReducers({ 
  movies,
  genres
});

export default rootReducer;
