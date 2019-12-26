import { api } from '../services';

export const fetchMoviesWithSagas = (payload) => ({
  type: 'FETCH_MOVIES_WITH_SAGAS',
  payload,
});

export const fetchMoviesStart = () => ({ type: 'FETCH_MOVIES_START' });
export const fetchMoviesSuccess = (payload) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload,
});

export const fetchMovies = ({ url }) => async (dispatch) => {
  dispatch(fetchMoviesStart());
  const payload = await api.get(url);
  dispatch(fetchMoviesSuccess(payload));
};
