import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Home />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
