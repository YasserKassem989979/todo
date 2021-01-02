import React from 'react'
import {
    useLocation,
    Link
} from "react-router-dom";
const NavBar = () => {
    const location = useLocation();
    return (
        <ul className="nav  justify-content-center mb-5 mt-3">
            <li className="nav-item mx-2">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? " active-nav " : ""}`}>Home</Link>
            </li>
            <li className="nav-item mx-2">
                <Link to="/calendar" className={`nav-link ${location.pathname === "/calendar" ? " active-nav " : ""}`}>Calendar</Link>
            </li>
        </ul>
    )
}

export default NavBar
