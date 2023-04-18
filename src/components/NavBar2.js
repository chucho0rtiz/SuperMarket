import '../styles/Style.css'
import logo from '../img/Logo1.png';
import React, { useState } from "react";
import {
    Nav, NavItem, NavLink
} from 'reactstrap';

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input
} from 'reactstrap';

import { BsFillPersonFill, BsPersonPlusFill } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { MdClose, MdShoppingCart } from 'react-icons/md';

function NavBar2() {
    const [modalC, setModalC] = useState(false);
    const toggleC = () => setModalC(!modalC);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Nav className="NavBarStyle" fill pills >
                <NavItem>
                    <img alt="logo" src={logo} />
                </NavItem>
                <NavItem>
                    <NavLink href="/SuperMarket" >
                        Inicio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Productos">
                        Productos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contactenos">
                        Contactenos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={toggleC}>
                        <i className="BsPersonPlusFill"><BsPersonPlusFill /></i> Crear cuenta
                    </NavLink>
                    {/* Inicio del Modal */}
                    <Modal className="modalInicioSes" isOpen={modalC} toggle={toggleC} size='md'>
                        <div className="logoInicioSesion">
                            <img alt="logo" src={logo} />
                        </div>
                        <ModalHeader className="TituloInicioSes" toggle={toggleC}>
                            <h2>
                                <i className="BsFillPersonFill"><BsFillPersonFill /></i> Crear Usuario
                            </h2>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Usuario:
                                    </Label>
                                    <Input
                                        id="exampleNombre"
                                        name="nombre"
                                        placeholder="User Name"
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        email:
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="email"
                                        type="email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Contraseña:
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Repita su contraseña:
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Repeat Your Password"
                                        type="password"
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter className="botonesInicioSes">
                            <Button className="botonColorM">
                                <i className="FiLogIn"><FiLogIn /></i> Crear Cuenta
                            </Button>
                            <Button className="botonColorN" color="danger" onClick={toggleC}>
                                <i className="IoClose"><MdClose /></i> Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* fin crear cuenta  */}
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={toggle}>
                        <i className="BsFillPersonFill"><BsFillPersonFill /></i> Iniciar sesion
                    </NavLink>
                    {/* Inicio del Modal */}
                    <Modal className="modalInicioSes" isOpen={modal} toggle={toggle} size='md'>
                        <div className="logoInicioSesion">
                            <img alt="logo" src={logo} />
                        </div>
                        <ModalHeader className="TituloInicioSes" toggle={toggle}>
                            <h2>
                                <i className="BsFillPersonFill"><BsFillPersonFill /></i> Iniciar Sesión
                            </h2>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Usuario:
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="email"
                                        type="email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Contraseña:
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormGroup>
                                <Label>
                                    <h4>
                                        <a className="olvideCont" href="https://www.nombredelaweb.com/" >
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </h4>

                                </Label>
                            </Form>
                        </ModalBody>
                        <ModalFooter className="botonesInicioSes">
                            <Button className="botonColorM" href='/GestionarProductos'>
                                <i className="FiLogIn"><FiLogIn /></i> Iniciar sesion
                            </Button>
                            <Button className="botonColorN" color="danger" onClick={toggle}>
                                <i className="IoClose"><MdClose /></i> Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* fin inicio de sesion  */}
                </NavItem>
                <NavItem>
                    <NavLink><i className="MdShoppingCart"><MdShoppingCart /></i></NavLink>
                </NavItem>
            </Nav>
        </div >
    );

}

export default NavBar2; 