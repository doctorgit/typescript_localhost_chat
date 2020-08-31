import { put } from 'redux-saga/effects';
import { isValidString } from 'utils';
import { updateUserProp,
    userNameInvalid,
    userNameValid } from '../actions/action-creators';

export function* userNameChange(action: any) {
    const { payload, chatStoreService } = action;
    try {
        yield put(updateUserProp('name', payload));
        if (!isValidString(payload)) {
            yield put(userNameInvalid(0x1));
            return;
        }

        const data = yield chatStoreService.checkUserName(payload);

        if (data && data.online) {
            yield put(userNameInvalid(0x2));
        } else {
            yield put(userNameValid());
        }
    } catch (error) {
        yield put(userNameInvalid(error));
    }
}
