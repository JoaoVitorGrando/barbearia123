// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>Barbearia</h1>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰ {/* Ícone do menu hamburguer */}
            </button>
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Serviços</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
