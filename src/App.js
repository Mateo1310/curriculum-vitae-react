import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/nav-bar';
import Header from './components/header';
import Experience from './components/experience';

const App = () => {
  return (
    <div className="App">
      <Navegacion id='home'/>
      <Header id='quien-soy'/>
      <Experience id='experiencia'/>
    </div>
  );
}

export default App;
