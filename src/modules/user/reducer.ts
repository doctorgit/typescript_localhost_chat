import {
    ActionTypes,
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    USER_NAME_INVALID,
    USER_NAME_ONSAVE_FAILURE,
    USER_NAME_ONSAVE_SUCCESS,
    MESSAGE_CHANGED,
    USER_NAME_VALID,
    UPDATE_USER_PROP
} from './actions';

const INITIAL_STATE = {
    message: '',
    error: null,
    name: '',
    invalidFlag: 0x0,
    isWaitingRequest: false,
    online: true
} as CurrentUser;

const updateCurrentUser = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case USER_NAME_VALID:
            return {
                ...state,
                invalidFlag: 0x0,
                isWaitingRequest: true
            }
        case USER_NAME_INVALID:
            return {
                ...state,
                invalidFlag:  state.invalidFlag | 0x1,
                isWaitingRequest: true
            }
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                isWaitingRequest: true,
                error: null
            }
        case UPDATE_USER_PROP: // UI
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            }
        case USER_NAME_ONSAVE_FAILURE:
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                isWaitingRequest: false,
                error: action.payload
            }
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                isWaitingRequest: false,
                error: null,
                message: ''
            }
        case USER_NAME_ONSAVE_SUCCESS:
            return {
                ...state,
                online: true,
                isWaitingRequest: false,
            }
        default:
            return state;
    }
};

export default updateCurrentUser;
