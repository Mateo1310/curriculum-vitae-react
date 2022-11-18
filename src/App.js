import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/nav-bar';
import { Row } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App" id='home'>
      <Navegacion/>
      <div className="container">
        <Row> 
        </Row>
      </div>
    </div>
  );
}

export default App;
