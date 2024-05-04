import React from "react";
import {Link, Outlet} from "react-router-dom"; //npm install react-router-dom
import "./style/header.css"


const Header = () => {
    return (
        <>
            <nav>
                <header>
                    <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </header>
            </nav>

            <Outlet/>
        </>
    );

}


export default Header;
