import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/sport-favoris">Sport Favoris</Link>
            <Link to="/resultats">Résultats</Link>
            <Link to="/emplacement">Emplacement</Link>
            <div className="navbar-profile">
                <Link to="/profile">
                    <CgProfile />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
