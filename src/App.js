import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/nav-bar';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Navegacion id='home'/>
      <Header id='quien-soy'/>
    </div>
  );
}

export default App;
