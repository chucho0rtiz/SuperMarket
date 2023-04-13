import React from 'react';
import '../styles/Style.css'
import logo from '../img/Logo1.png';
import { memo } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
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
                            <NavLink href="/">Crear cuenta</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Ingresar</NavLink>
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