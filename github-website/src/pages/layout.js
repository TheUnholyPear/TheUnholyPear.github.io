import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import "./style/layout.css";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
