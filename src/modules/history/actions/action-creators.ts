import { FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS } from "./index";

const messagesRequested: ActionWithPayload<any> = (chatStoreService) => ({
    type: FETCH_MESSAGES_REQUEST,
    payload: {
        chatStoreService
    }
}) as const;

const messagesLoaded: ActionWithPayload<any> = (newMessages) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: newMessages
}) as const;

const messagesError: ActionWithPayload<Error> = (error) => ({
    type: FETCH_MESSAGES_FAILURE,
    payload: error
}) as const;

export {
    messagesRequested,
    messagesLoaded,
    messagesError
}
