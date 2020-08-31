import React, { FC, useEffect, useRef } from 'react';
import MessageListItem from 'modules/history/components/message-list-item';
import { useSelector } from 'react-redux';
import { getUserNameSelector } from 'modules/user/selectors';

import './style.css';

interface Props {
    userName: any;
    messages: any;
    loading: boolean;
}

let scrollTop = 0;

const MessagesList: FC<Props> = ({ messages, loading }) => {
    let viewPort = useRef({}) as any;
    let messagesEnd = useRef({}) as any;
    const userName = useSelector(getUserNameSelector);

    let list = [];
    // eslint-disable-next-line
    for (let [, value] of messages) {
        list.push(<MessageListItem key={ value.id } userName={ userName } message={ value } />);
    }

    useEffect(() => {
        if (messagesEnd.current && viewPort.current) {
            if (typeof viewPort.current.scroll === 'function') {
                viewPort.current.scroll(0, scrollTop);
            } else {
                viewPort.current.scrollTop = scrollTop;
            }

            messagesEnd.current.scrollIntoView(/*{ behavior: 'smooth' }*/);

            if (viewPort.current.scrollTop > 0 && scrollTop !== viewPort.current.scrollTop) {
                scrollTop = viewPort.current.scrollTop;
            }
        }
    });

    return (
        <div ref={ viewPort }
             className={ 'message-list-container overflow-auto container-fluid' }>
            <div className={ 'row' }>
                <div className={ 'col' }>
                    { !loading && !list.length ?
                        <div className={ 'row h-100 align-items-center' }>
                            <div className={ 'col-4 mx-auto' }>History is empty</div>
                        </div>
                        : list }
                    <div style={{ float:'left', clear: 'both' }}
                         ref={ messagesEnd }
                    />
                </div>
            </div>
        </div>
    );
};

export default MessagesList;
