import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/layout/Header'
import User from './components/User';
import Routes from './Routes';

function App() {
  return (
    <Router>

      <Header>
        <User />
      </Header>
      <Routes />
    </Router>
  );
}

export default App;
