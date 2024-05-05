import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <p className="welcome-text">Welcome to my Website</p>
                <p className="byline">By Ryan Bain</p>
            </div>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
