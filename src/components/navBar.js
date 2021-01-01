import React from 'react'
import {
    useLocation,
    Link
} from "react-router-dom";
const NavBar = () => {
    const location = useLocation();
    return (
        <ul className="nav nav-pills justify-content-center my-3">
            <li className={`nav-item`}>
                <Link to="/" className={`nav-link ${location.pathname === "/" ? " active " : ""}`}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/calendar" className={`nav-link ${location.pathname === "/calendar" ? " active " : ""}`}>Calendar</Link>
            </li>
        </ul>
    )
}

export default NavBar
