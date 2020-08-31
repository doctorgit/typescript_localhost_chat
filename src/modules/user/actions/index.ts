import {
    onSaveUserNameFailure,
    onSaveUserNameRequest, onSaveUserNameSuccess,
    sendMessageFailure,
    sendMessageRequest,
    sendMessageSuccess,
    updateUserProp,
} from './action-creators';

export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';

export const USER_NAME_INVALID = 'USER_NAME_INVALID';

export const USER_NAME_VALID = 'USER_NAME_VALID';
export const USER_NAME_ONSAVE_REQUEST = 'USER_NAME_ONSAVE_REQUEST';
export const USER_NAME_ONSAVE_SUCCESS = 'USER_NAME_ONSAVE_SUCCESS';
export const USER_NAME_ONSAVE_FAILURE = 'USER_NAME_ONSAVE_FAILURE';

export const ON_USER_NAME_CHANGED = 'ON_USER_NAME_CHANGED';
export const UPDATE_USER_PROP = 'UPDATE_USER_PROP';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

const ActionCreators = {
    sendMessageRequest,
    sendMessageFailure,
    sendMessageSuccess,
    onSaveUserNameRequest,
    onSaveUserNameSuccess,
    onSaveUserNameFailure,
    updateUserProp,
}

type ActionTypes = ReturnType<InferValueTypes<typeof ActionCreators>>;

export {
    ActionCreators,
    ActionTypes,
    sendMessageRequest,
    sendMessageFailure,
    sendMessageSuccess,
    onSaveUserNameRequest,
    onSaveUserNameSuccess,
    onSaveUserNameFailure,
    updateUserProp,
}

