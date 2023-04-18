import '../styles/Style.css'
import logo from '../img/Logo1.png';
import {
    Nav, NavItem, NavLink
} from 'reactstrap';

import { FiLogOut } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';

function NavBar2Home() {

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
                        Gestionar Productos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contactenos">
                        Contactenos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contactenos">
                        <i className="FiLogOut"><FiLogOut /></i> Cerrar sesion
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/SuperMarket">
                        <i className="MdShoppingCart"><MdShoppingCart /></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </div >
    );

}

export default NavBar2Home; 