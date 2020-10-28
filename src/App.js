import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import Container from "@material-ui/core/Container";
import './App.css';
import NavBar from './components/NavBar';

function App() {

  return (
  
      <Router>
        <NavBar />

        <Container maxWidth="lg">
          <Routes />
        </Container>
      </Router>

  );
}

export default App;
