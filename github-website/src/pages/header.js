import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="containerH">
                <div className="logo">
                    <Link to="https://www.linkedin.com/in/ryanmbain" className="nav-logo">Ryan Bain</Link>
                </div>
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
