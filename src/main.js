import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import NavBarHome from "./components/NavBarHome";
import Footer from './components/Footer';
import './styles/Style.css';

function Main() {
    const [estadoEnav, setEstadoEnav] = useState(true);

    function handleState(estado) {
        setEstadoEnav(estado);
    }

    return (
        <div>
            {estadoEnav
                ? <NavBar handleState={(estado) => handleState(estado)} />
                : <NavBarHome handleState={(estado) => handleState(estado)} />
            }
            <Outlet />
            <Footer />
        </div >
    );

}

export default Main; 