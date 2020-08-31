import { ActionTypes,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS
} from './actions';

const INITIAL_STATE = {
    messages: new Map(),
    loading: false,
    error: null
} as ChatHistory;

const updateChatHistory = (state = INITIAL_STATE, action: ActionTypes) => {
    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MESSAGES_SUCCESS:
            return {
                messages: action.payload,
                loading: false,
                error: null
            };

        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default updateChatHistory;
