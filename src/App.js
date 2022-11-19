import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/nav-bar';
import Header from './components/header';
import Experience from './components/experience';
import EducacionHabilidades from './components/edu-hab';
import Contacto from './components/contact';

const App = () => {
  return (
    <div className="App">
      <Navegacion/>
      <Header id="header"/>
      <Experience id="experience"/>
      <EducacionHabilidades id="edu-hab"/>
      <Contacto id="contact"/>
    </div>
  );
}

export default App;
