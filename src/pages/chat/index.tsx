import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MessageBox from 'modules/user/components/message-box';
import { MessageListContainer } from 'modules/history/components';

import './style.css'

interface Props {
  name?: string;
}

const ChatPage: FC<Props> = ({ name }) => {
    if (!name) {
        return (
            <Redirect to={{ pathname: '/' }}/>
        );
    }
    return (
        <div className={ 'h-100 chat-page-container' }>
            <MessageListContainer />
            <MessageBox />
        </div>
    );
};

const mapStateToProps = ({ currentUser: { name }}: any) => {
    return { name }
};

export default connect(mapStateToProps)(ChatPage);
