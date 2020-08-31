import React, { FC } from 'react';
import { formatDate } from 'utils';
import './style.css';

interface Props {
    userName?: string;
    message: UserMessage;
}

const MessageListItem: FC<Props> = ({ userName, message }) => {
    const { text, uid, time } = message;
    const cls = 'col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-5 message' + (uid === userName ? ' my-message' : ' other-message');

    return (
        <div className={'row' + (uid === userName ? ' justify-content-end' : '')}>
            <div className={cls}>
                <div className={'row'}>
                    <div className={'col message-user-name'}>{uid === userName ? 'You' : uid}</div>
                </div>
                <div className={'row'}>
                    <div className={'col message-text grow'}>{text}</div>
                </div>
                <div className={'row pull-right'}>
                    <div className={'col message-time'}>{formatDate(time)}</div>
                </div>
            </div>
        </div>
    )
};

export default MessageListItem;
