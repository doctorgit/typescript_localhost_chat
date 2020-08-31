import { SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    USER_NAME_INVALID,
    USER_NAME_VALID,
    USER_NAME_ONSAVE_REQUEST,
    USER_NAME_ONSAVE_FAILURE,
    USER_NAME_ONSAVE_SUCCESS,
    ON_USER_NAME_CHANGED,
    UPDATE_USER_PROP } from './index';

const sendMessageRequest: Action = (chatStoreService) => ({
    type: SEND_MESSAGE_REQUEST,
    payload: {
        chatStoreService
    }
}) as const;

const sendMessageSuccess: Action = () => ({
    type: SEND_MESSAGE_SUCCESS
}) as const;

const sendMessageFailure = (payload: Error) => ({
    type: SEND_MESSAGE_FAILURE,
    payload
}) as const;

export const onSaveUserNameRequest = async (chatStoreService: any) => ({
    type: USER_NAME_ONSAVE_REQUEST,
    payload: {
        chatStoreService
    }
}) as const;

export const onSaveUserNameSuccess = () => ({
    type: USER_NAME_ONSAVE_SUCCESS
}) as const;

export const onSaveUserNameFailure = (payload: Error) => ({
    type: USER_NAME_ONSAVE_FAILURE,
    payload
}) as const;

// UI section
export const onUserNameChanged = (payload: string, chatStoreService: any) => ({
    type: ON_USER_NAME_CHANGED,
    payload,
    chatStoreService
});

export const updateUserProp = (key: string, value: any) => ({
    type: UPDATE_USER_PROP,
    payload: { key, value }
}) as const;

export const userNameInvalid = (payload: any) => ({
    type: USER_NAME_INVALID,
    payload
}) as const;

export const userNameValid = () => ({
    type: USER_NAME_VALID
}) as const;


export const onLogout = (chatStoreService: any) => () => (dispatch: any, getState: any) => {
    const {currentUser} = getState();
    chatStoreService.doLogout(currentUser);
};

export {
    sendMessageRequest,
    sendMessageSuccess,
    sendMessageFailure,
};
