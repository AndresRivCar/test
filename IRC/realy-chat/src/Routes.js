import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import Chat from './components/Chat';

const Routes = () => (
    <Routes>
        <Route exact path="/" component={Chat} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </Routes>
);

export default Routes;