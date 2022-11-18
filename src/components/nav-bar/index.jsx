import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

const Navegacion = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#home" className="fs-3 mx-3">Mateo Rodriguez Garcia <span>Desarrollador Web</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll d-flex justify-content-right">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        |   <Nav.Link href="#quien-soy">¿Quien soy?</Nav.Link>
                            <Nav.Link href="#experiencia">Experiencia</Nav.Link>
                            <Nav.Link href="#educacion">Educación</Nav.Link>
                            <Nav.Link href="#Habilidades">Habilidades</Nav.Link>
                            <Nav.Link href="#contacto" className="align-content-end">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </div>
    );
};

export default Navegacion;