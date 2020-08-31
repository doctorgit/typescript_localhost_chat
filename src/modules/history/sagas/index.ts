import { all, takeLatest } from 'redux-saga/effects';
import {FETCH_MESSAGES_REQUEST} from "../actions";
import { fetchMessages } from "./fetch-messages";

export default function* historySaga() {
    yield all([
        yield takeLatest(FETCH_MESSAGES_REQUEST, fetchMessages)
    ]);
}
