import React from "react";
import './styles/index.css';
import { Row, Container } from "react-bootstrap";

import { BiPhoneCall, BiMap } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';



const Contacto = () => {
    return(
        <div className="container-edu-hab">
            <Container>
                <Row>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 my-3">
                        <h4><b>Contacto</b></h4>
                        <div className="row my-3">
                            <div className="col-12">
                                <BiPhoneCall className="icon-contact"/><i> +57 320 536 6483</i>                           
                            </div>
                            <div className="col-12">
                                <AiOutlineMail className="icon-contact"/><i> mrodriguez81813@umanizales.edu.co</i>                           
                            </div>
                            <div className="col-12">
                                <BiMap className="icon-contact"/><i> Carrera 18 # 6B-21, La Floresta, Villamaria, Caldas, Colombia.</i>                           
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 my-3">
                        <h4><b>Redes Sociales</b></h4>
                        <Row className="">
                            <div className="col-3 icon-social my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </div>
                            <div className="col-3 icon-social my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </div>
                            <div className="col-3 icon-social my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                                </svg>
                            </div>
                            <div className="col-3 icon-social my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="8" y1="11" x2="8" y2="16" />
                                    <line x1="8" y1="8" x2="8" y2="8.01" />
                                    <line x1="12" y1="16" x2="12" y2="11" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </div>
                        </Row>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 my-3">
                        <p className="rights-reserved">?? 2022 All rights reserved. All Rights Reserved Made with  by Mateo Rodriguez Garcia</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Contacto;