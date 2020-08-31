export const getHistory = (state: AnyObject) => state.history;

export const getUser = (state: AnyObject) => state.currentUser;

export const getMessageSelector = ({ currentUser }: AnyObject) => currentUser.message;

export const getUserNameSelector = ({ currentUser }: AnyObject) => currentUser.name;
export const getInvalidFlagSelector = ({ currentUser }: AnyObject) => currentUser.invalidFlag;
