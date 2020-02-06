import { combineReducers } from 'redux';
import { movies } from './movies.reducer';
import { genres } from './genres.reducer';
import { search } from './search.reducer';

const rootReducer = combineReducers({ 
  movies,
  genres,
  search
});

export default rootReducer;
