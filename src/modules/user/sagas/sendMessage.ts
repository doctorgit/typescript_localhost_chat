import { put, select, call } from 'redux-saga/effects';
import {syncLocalStorage} from '../../../utils';
import { messagesError, messagesLoaded } from '../../history/actions';
import { sendMessageSuccess } from '../actions';
import { getMessageSelector, getUserNameSelector } from '../selectors';

export function* sendMessage(action: any) {
    try {
        const { chatStoreService } = action.payload;
        const name = yield select(getUserNameSelector);
        const text = yield select(getMessageSelector);

        const data = yield chatStoreService.sendMessage({ text, uid: name });

        yield call(syncLocalStorage);

        yield put(sendMessageSuccess());
        yield put(messagesLoaded(data));
    } catch (error) {
        yield put(messagesError(error));
    }
}
