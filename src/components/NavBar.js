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
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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