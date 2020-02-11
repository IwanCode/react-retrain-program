import { call, takeEvery, put } from 'redux-saga/effects';
import { api } from '../services';
import { fetchGenresSuccess } from '../actions/genres.action';

function* fetchGenresStartWorker({ payload: { url } }: any) {
    const data = yield call(api.get, url);
    yield put(fetchGenresSuccess(data));
}

function* watchFetchGenresWorker() {
    yield takeEvery('FETCH_GENRES_WITH_SAGAS', fetchGenresStartWorker);
}

export default watchFetchGenresWorker;
