import { all } from 'redux-saga/effects';
import historySaga from 'modules/history/sagas';
import userSaga from 'modules/user/sagas';

export default function* rootSaga() {
    yield all([
        userSaga(),
        historySaga()
    ]);
}
