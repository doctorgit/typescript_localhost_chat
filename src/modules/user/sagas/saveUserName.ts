import { put, call, select } from 'redux-saga/effects';
import { syncLocalStorage } from 'utils';
import { onSaveUserNameFailure, onSaveUserNameSuccess } from '../actions';
import { getUserNameSelector } from '../selectors';

export function* saveUserName(action: any) {
    const { chatStoreService } = action.payload;
    try {
        const name = yield select(getUserNameSelector)
        yield chatStoreService.saveUserName(name);

        yield call(syncLocalStorage);

        yield put(onSaveUserNameSuccess());
    } catch (error) {
        yield put(onSaveUserNameFailure(error));
    }
}
