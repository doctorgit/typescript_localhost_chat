import { put } from 'redux-saga/effects';
import { messagesError, messagesLoaded } from "../actions";

export function* fetchMessages(action: any) {
    try {
        const { chatStoreService } = action.payload;

        const data = yield chatStoreService.getChatHistory();
        yield put(messagesLoaded(data))
    } catch (error) {
        yield put(messagesError(error));
    }
}
