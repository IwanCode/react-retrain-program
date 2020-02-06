import { api } from '../services';

export const fetchMoviesWithSagas = (payload: any) => ({
  type: 'FETCH_MOVIES_WITH_SAGAS',
  payload,
});

export const fetchMoviesStart = () => ({ type: 'FETCH_MOVIES_START' });
export const fetchMoviesSuccess = (payload: any) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload,
});

export const fetchMovies = ({ url }: any) => async (dispatch: any) => {
  dispatch(fetchMoviesStart());
  const payload = await api.get(url);
  dispatch(fetchMoviesSuccess(payload));
};
