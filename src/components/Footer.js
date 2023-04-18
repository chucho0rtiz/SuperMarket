import { memo } from "react";
import '../styles/Style.css';
import logo from '../img/Logo1.png';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';

function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="FaFacebookSquare redSocialInicio"><FaFacebookSquare /></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="FaTwitterSquare redSocialInicio"><FaTwitterSquare /></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="SiGmail redSocialInicio"><TbBrandGmail /></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="FaInstagramSquare redSocialInicio"><FaInstagramSquare /></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="FaLinkedin redSocialInicio"><FaLinkedin /></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="FaGithubSquare redSocialInicio"><FaGithubSquare /></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img
                                        alt="logo"
                                        src={logo}
                                    />
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>

                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: `#0000000d` }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div >
    );

}

export default memo(Footer); 