import '../styles/Style.css'
import logo from '../img/Logo1.png';
import React, { memo } from "react";
import {
    Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand,
    Button
} from 'reactstrap';
import { FiLogOut } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';


function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img alt="logo" src={logo} />
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} pills navbar>
                    <Nav className="mr-auto" pills navbar>
                        <NavItem>
                            <NavLink href="/SuperMarket">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/GestionarProductos">Gestionar Productos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contactenos">Contactenos</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Button color="danger" href="/SuperMarket">
                                    <i className="FiLogOut"><FiLogOut /></i> Cerrar sesion
                                </Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/"><i className="MdShoppingCart"><MdShoppingCart /></i></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );

}

export default memo(NavBar); 