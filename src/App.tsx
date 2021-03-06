import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes } from './Routes';
import { theme } from './theme/main';
import MenuBar from './components/MenuBar';
import './styles/global.scss'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MenuBar />
        <Routes />
      </Router> 
    </ThemeProvider>
  );
}

export default App;

