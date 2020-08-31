import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'components/app';
import ErrorBoundary from 'components/error-boundry';
import ChatStoreService from 'services/chatstore-service';
import { ChatStoreServiceProvider } from './components/chatstore-service-context';

import store from 'store';

const chatStoreService = new ChatStoreService();

ReactDOM.render(
  <Provider store={ store } >
      <ErrorBoundary>
          <ChatStoreServiceProvider value={ chatStoreService }>
              <Router>
                <App/>
              </Router>
          </ChatStoreServiceProvider>
      </ErrorBoundary>
  </Provider>,
    document.getElementById('root')
);
