import { user, history } from 'modules';

const rootReducer = (state: AnyObject = {}, action: any) => ({
    history: history(state.history, action),
    currentUser: user(state.currentUser, action)
});

export default rootReducer;
