import React, { useRef, useEffect, FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageRequest, updateUserProp } from 'modules/user/actions';
import { getMessageSelector } from '../../selectors';
import { withChatStoreService } from 'components/hoc';

import './message-box.css';

const MessageBox: FC<any> = ({ chatStoreService }) => {
    const dispatch = useDispatch();
    const text = useSelector(getMessageSelector);

    const setMessage = useCallback((message: string) => {
        dispatch(updateUserProp('message', message))
    }, [dispatch])

    const onClick = useCallback(() => {
        dispatch(sendMessageRequest(chatStoreService));
    }, [dispatch, chatStoreService])

    const textRef = useRef<any>(null);
    useEffect(() => {
        textRef.current.focus()
    }, []);

    return (
        <div className={ 'message-box-container container-fluid' }>
        <div className={ 'row h-100' }>
            <div className={ 'p-2 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10' }>
                <textarea
                    ref={ textRef }
                    placeholder="Enter text here"
                    className={ 'h-100 w-100' }
                    value={ text }
                    onChange={ (evt) => (setMessage(evt.target.value)) }
                />
            </div>
            <div className={ 'p-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2' }>
                <button
                    className={ 'btn w-100 btn-success btn-md pull-right' }
                    onClick={ onClick }
                    type="button"
                    name="button"
                    disabled={ !text }
                >
                    Send
                </button>
            </div>
        </div>
    </div>
    );
};

export default withChatStoreService()(MessageBox);
