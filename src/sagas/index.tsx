import { all } from 'redux-saga/effects';
import watchFetchMoviesWorker from './movies.saga';
import watchFetchGenresWorker from './genres.saga';

export default function* rootSaga() {
  yield all([
    watchFetchMoviesWorker(),
    watchFetchGenresWorker()
  ]);
}
