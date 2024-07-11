import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css';


const Header = () => {
    const [Homecss, setHomecss] = useState("Header-link");
    const [Contactcss, setContactcss] = useState("Header-link");
    const [Aboutcss, setAboutcss] = useState("Header-link");
    const [Logincss, setLogincss] = useState("Header-link");
    const [AVGcss, setAVGcss] = useState("Header-link");
    const Location = useLocation();

    useEffect(() => {
        if (Location.pathname === "/") {
            setHomecss("Header-checked");
            setContactcss("Header-link");
            setAboutcss("Header-link");
            setLogincss("Header-link");
            setAVGcss("Header-link");
        } else if (Location.pathname === "/contact") {
            setHomecss("Header-link");
            setContactcss("Header-checked");
            setAboutcss("Header-link");
            setLogincss("Header-link");
            setAVGcss("Header-link");
        } else if (Location.pathname === "/about") {
            setHomecss("Header-link");
            setContactcss("Header-link");
            setAboutcss("Header-checked");
            setLogincss("Header-link");
            setAVGcss("Header-link");
        } else if (Location.pathname === "/login") {
            setHomecss("Header-link");
            setContactcss("Header-link");
            setAboutcss("Header-link");
            setLogincss("Header-checked");
            setAVGcss("Header-link");
        } else if (Location.pathname == "/AVG") {
            setHomecss("Header-link");
            setContactcss("Header-link");
            setAboutcss("Header-link");
            setLogincss("Header-link");
            setAVGcss("Header-checked");
        }
    }, [Location.pathname]);

    return (
        <div className="Header-div">
            <span className="Header-span">
                <h1 className="TPTP">
                    <Link to="/" className={Homecss}>TP</Link>
                </h1>

                <Link to="/AVG" className={AVGcss}>AVG</Link>
                <Link to="/contact" className={Contactcss}>PHOTO</Link>
                <Link to="/about" className={Aboutcss}>ABOUT</Link>
                <Link to="/login" className={Logincss} id="LOGIN">Login</Link>
            </span>
        </div>
    );
}

export default Header;
