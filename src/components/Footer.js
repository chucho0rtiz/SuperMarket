// import '../styles/Style.css';
import logo from '../img/Logo1.png';
// import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
// import { TbBrandGmail } from 'react-icons/tb';

function Footer() {
    return (
        <div>
            <footer className="colorfooter text-center text-lg-start bg-light text-muted">
                <section className="">
                    <br />
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
                                    Tags
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Social
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Data</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                                <p>Shop</p>
                                <p>Authors</p>
                                <p>Sitemap</p>
                                <p>About us</p>
                                <p>Contact</p>
                            </div>
                        </div>

                    </div>
                </section>
            </footer>
        </div >
    );

}

export default Footer; 