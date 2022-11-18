import React from "react";
import './styles/index.css'
import { Container, Row } from "react-bootstrap";
import Foto from './img/foto-mateo.png';

const Header = () => {
    return(
        <div className="container-header">
            <Container>
                <Row className="align-items-center justify-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        <img src={Foto} alt="Foto Curriculum"/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8">
                        <Row className="my-3">
                            <h1 className="fw-bold align-middle">¿QUIEN SOY?</h1>
                        </Row>
                        <Row>
                            <p>Estudiante de Ingenieria en Sistemas y Telecomunicaciones, con capacidades para el desarrollo de aplicaciones tanto en un entorno Web como en un entorno local, tambien diseño y administracion de bases de datos postgresql, conocimiento de lenguajes de programacion como: Java, Python, Javascript.
                                Desarrollo de algoritmos para la solucion de problemas informaticos. para el diseño de visualizacion de usuario conocimiento de herramientas como: HTML, CSS, Boostrap, SASS. Seguro y positivo de mis capacidades y conocimientos, trabajando en equipo conocido por la contribucion efectiva, con capacidades de liderar un equipo, dando asi soluciones creativas y eficientes, dadas desde un entorno profesional. abierto a dar y recibir criticas constructivas mientras trabajo en un ambiente de equipo para lograr un objetivo en comun.</p>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Header;