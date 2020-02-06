import { call, takeEvery, put } from 'redux-saga/effects';
import { api } from '../services';
import { fetchMoviesSuccess } from '../actions/movies.action';

function* fetchMoviesStartWorker({ payload: { url } }) {
    const data = yield call(api.get, url);
    yield put(fetchMoviesSuccess(data));
}

function* watchFetchMoviesWorker() {
    yield takeEvery('FETCH_MOVIES_WITH_SAGAS', fetchMoviesStartWorker);
}

export default watchFetchMoviesWorker;
