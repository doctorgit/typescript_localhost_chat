import * as ls from 'local-storage';
import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ErrorIndicator from 'components/error-indicator';
import { withChatStoreService } from 'components/hoc';
import Spinner from 'components/spinner';
import { onLogout } from 'modules/user/actions/action-creators';
import { messagesRequested } from "../../actions";
import { getHistorySelector, getUserName } from '../../selectors';
import MessagesList from './list';

const MessageListContainer: FC<any> = ({ chatStoreService }) => {
    const historyState = useSelector(getHistorySelector);
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();

    const localStorageHandler = useCallback(() => {
        dispatch(messagesRequested(chatStoreService))
    }, [dispatch, chatStoreService]);

    const logoutHandler = useCallback(() => {
        dispatch(onLogout(chatStoreService));
    }, [dispatch, chatStoreService])

    useEffect(() => {
        localStorageHandler()

        // handle the sync event that the state will be the same between different tabs
        ls.on('app_local_chat', localStorageHandler);

        // on tab close sets user offline
        window.addEventListener('beforeunload', logoutHandler);
        document.title = `logged in as ${userName}`;

        return () => {
            ls.off('app_local_chat', localStorageHandler);
            window.removeEventListener('beforeunload', logoutHandler);
        }
    }, [])

    const { loading, error } = historyState;

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>;
    }

    return <MessagesList {...historyState} />;

};

export default withChatStoreService()(MessageListContainer);
