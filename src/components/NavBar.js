import '../styles/Style.css'
import logo from '../img/Logo1.png';
import React, { memo, useState } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={logo}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} pills navbar>
                    <Nav className="mr-auto" pills navbar>
                        <NavItem>
                            <NavLink href="/SuperMarket">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Productos">Productos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contactenos">Contactenos</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                Crear cuenta
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                {/* inicio de sesion  */}
                                <Button color="danger" onClick={toggle}>
                                    Iniciar sesion
                                </Button>
                                {/* Inicio del Modal */}
                                <Modal isOpen={modal} toggle={toggle} size='lg'>
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <div>
                                            <label for="inputPassword5" class="form-label">Password</label>
                                            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock" />
                                            <div id="passwordHelpBlock" class="form-text">
                                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>
                                            Do Something
                                        </Button>{' '}
                                        <Button color="secondary" onClick={toggle}>
                                            Cancel
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                                {/* fin inicio de sesion  */}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">carrito</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default memo(NavBar); 