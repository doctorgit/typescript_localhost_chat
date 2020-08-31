import { messagesError,
    messagesLoaded,
    messagesRequested } from "./action-creators";

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';

const ActionCreators = { messagesRequested, messagesLoaded, messagesError };
type ActionTypes = ReturnType<InferValueTypes<typeof ActionCreators>>;

export {
    messagesError,
    messagesLoaded,
    messagesRequested,
    ActionTypes,
}
