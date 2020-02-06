import { api } from '../services';

export const fetchGenresWithSagas = (payload: any) => ({
  type: 'FETCH_GENRES_WITH_SAGAS',
  payload,
});

export const fetchGenresStart = () => ({ type: 'FETCH_GENRES_START' });
export const fetchGenresSuccess = (payload: any) => ({
  type: 'FETCH_GENRES_SUCCESS',
  payload,
});

export const fetchGenres = ({ url }: any) => async (dispatch: any) => {
  dispatch(fetchGenresStart());
  const payload = await api.get(url);
  dispatch(fetchGenresSuccess(payload));
};
