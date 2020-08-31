import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const stringMiddleware = () => (nextDispatch: any) => (action: any) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        });
    }
    return nextDispatch(action);
};

const logMiddleware = ({ getState }: any) => (nextDispatch: any) => (action: any) => {
    console.log(action.type, action.payload, getState());
    return nextDispatch(action);
};

const store = createStore(rootReducer,
    applyMiddleware(
        sagaMiddleware,
        thunkMiddleware,
        promiseMiddleware,
        stringMiddleware,
        logMiddleware
    ));

sagaMiddleware.run(rootSaga);

export default store;
