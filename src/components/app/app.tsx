import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, ChatPage } from 'pages';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={ LoginPage } exact/>
            <Route path="/chat" component={ ChatPage }/>
        </Switch>
    );
};

export default App;
