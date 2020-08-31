import React from 'react';
import { ChatStoreServiceConsumer } from '../chatstore-service-context';

const withChatStoreService = () => (Wrapped: any) => {

  return function (props: any) {
      return (
          <ChatStoreServiceConsumer>
              {
                  (chatStoreService) => (
                      <Wrapped { ...props } chatStoreService={ chatStoreService }/>
                  )
              }
          </ChatStoreServiceConsumer>
      );
  }
};

export default withChatStoreService;
