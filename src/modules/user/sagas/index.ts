import {all, takeLatest} from 'redux-saga/effects';
import { SEND_MESSAGE_REQUEST,
    USER_NAME_ONSAVE_REQUEST,
    ON_USER_NAME_CHANGED } from '../actions';
import { saveUserName } from './saveUserName';
import { sendMessage } from './sendMessage';
import { userNameChange } from './userNameChange';

export default function* historySaga() {
    yield all([
        yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage),
        yield takeLatest(USER_NAME_ONSAVE_REQUEST, saveUserName),
        yield takeLatest(ON_USER_NAME_CHANGED, userNameChange)
    ]);
}
