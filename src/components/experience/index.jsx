import React from "react";
import './styles/index.css';
import { Row, Container } from "react-bootstrap";


const Experience = () => {
    return(
        <div className="container-experience">
            <Container>
                <Row className="align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 my-3">
                        <h1 className="fw-bold align-middle">EXPERIENCIA LABORAL</h1>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 my-3">
                        <div class="section-experience m-3">
                            <div class="exp-lab">
                                <div class="d-flex justify-content-between">
                                    <h6 class="fw-bold">Tecnico hardward en Reparacion de dispositivos moviles.</h6>
                                    <span>2020-2021</span>
                                </div>

                                <i>Celustar / Manizales, Caldas</i>
                                <ul>
                                    <li><i class="bi bi-check2"></i> Reparacion de dispositvos moviles en su estructura electronica.</li>
                                    <li><i class="bi bi-check2"></i> Atencion al cliente.</li>
                                </ul>
                            </div>
                            <div class="exp-lab">
                                <div class="d-flex justify-content-between">
                                    <h6 class="fw-bold">Analista de información y Coordinador logístico.</h6>
                                    <span>2021-2022</span>
                                </div>

                                <i>Partido Liberal / Manizales, Caldas</i>
                                <ul>
                                    <li><i class="bi bi-check2"></i> Analisis de información electoral.</li>
                                    <li><i class="bi bi-check2"></i> Coordinacion logistica para eventos de la candidata.</li>
                                    <li><i class="bi bi-check2"></i> Administracion de la sede del Partido.</li>
                                </ul>
                            </div>
                            <div class="exp-lab">
                                <div class="d-flex justify-content-between">
                                    <h6 class="fw-bold">Analista(Remoto).</h6>
                                    <span>2022-Actual</span>
                                </div>

                                <i>Netcol Ingenierias SAS / Bogota, Cundinamarca</i>
                                <ul>
                                    <li><i class="bi bi-check2"></i> Monitoreo de energia en Radio Bases(Antenas) de Movistar.</li>
                                    <li><i class="bi bi-check2"></i> Analisis y Solucion de fallas en Redes moviles y Redes fija.</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;