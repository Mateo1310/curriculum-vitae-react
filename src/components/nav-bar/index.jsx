import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navegacion = () => {
    return(
        <div>
        <Navbar bg="dark" variant="dark" className="">
            <Navbar.Brand href="#home" className="mx-3 fs-3">Mateo Rodriguez Garcia <span>Desarrollador Web Junior</span></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end mx-3"/>
            <Nav className="me-auto">
                <Nav.Link href="#quien-soy">¿Quien soy?</Nav.Link>
                <Nav.Link href="#experiencia">Experiencia</Nav.Link>
                <Nav.Link href="#educacion">Educación</Nav.Link>
                <Nav.Link href="#Habilidades">Habilidades</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
        </Navbar>   
        </div>
    );
};

export default Navegacion;