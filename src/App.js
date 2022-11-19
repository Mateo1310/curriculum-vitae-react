import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/nav-bar';
import Header from './components/header';
import Experience from './components/experience';
import EducacionHabilidades from './components/edu-hab';

const App = () => {
  return (
    <div className="App">
      <Navegacion/>
      <Header/>
      <Experience/>
      <EducacionHabilidades />
    </div>
  );
}

export default App;
