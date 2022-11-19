import React from "react";
import './styles/index.css';
import { Row, Container } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';



const EducacionHabilidades = () => {
    return(
        <div className="container-edu-hab">
            <Container>
                <Row>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-3 section-education">
                        <h1 className="fw-bold align-middle my-3">EDUCACIÓN</h1>
                        <div className="educacion-item my-3 py-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="fw-bold">Bachiller Academico</h6>
                                <span>2017</span>
                            </div>
                            <i>I.E Gerardo Arias Ramirez / Villamaria, Caldas</i>
                        </div>
                        <div className="educacion-item my-3 py-3 text-left">
                            <div className="d-flex justify-content-between">
                                <h6 className="fw-bold">Diplomado Programacion en JAVA</h6>
                                <span>2021</span>
                            </div>
                            <i>Politecnico de Colombia</i>
                        </div>
                        <div className="educacion-item my-3 py-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="fw-bold">Pregrado en Ingeniera en Sistemas y Telecomunicaciones</h6>
                                <span>2019-ACTUAL</span>
                            </div>
                            <i>Universidad de Manizales / Manizales, Caldas</i>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-3">
                        <h1 className="fw-bold align-middle my-3">HABILIDADES</h1>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>JAVA</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={80} label={`80%`} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={50} label={`50%`} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>HTML</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={70} label={`70%`} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>CSS</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={50} label={`50%`} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>REACT JS</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={30} label={`30%`} />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <h5>PYTHON</h5>
                            </div>
                            <div className="col-8">
                                <ProgressBar animated variant="dark" now={60} label={`60%`} />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default EducacionHabilidades;