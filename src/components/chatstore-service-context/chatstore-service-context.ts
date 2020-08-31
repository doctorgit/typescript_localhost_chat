import React from 'react';

const {
  Provider: ChatStoreServiceProvider,
  Consumer: ChatStoreServiceConsumer
} = React.createContext({});

export {
    ChatStoreServiceProvider,
    ChatStoreServiceConsumer
};
