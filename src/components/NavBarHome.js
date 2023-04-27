import '../styles/Style.css'
import logo from '../img/Logo1.png';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
// Iconos
import { FiLogOut } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';

function NavBarHome(props) {

    const { handleState } = props;

    return (
        <div>
            <Nav className="NavBarStyle" fill pills >
                <NavItem>
                    <img alt="logo" src={logo} />
                </NavItem>
                <NavItem>
                    <Link to="/" >
                        Inicio
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/GestionarProductos">
                        Gestionar Productos
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Contactenos">
                        Contactenos
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/" onClick={() => { handleState(true); }}>
                        <i className="FiLogOut"><FiLogOut /></i> Cerrar sesion
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/">
                        <i className="MdShoppingCart"><MdShoppingCart /></i>
                    </Link>
                </NavItem>
            </Nav>
        </div >
    );

}

export default NavBarHome; 