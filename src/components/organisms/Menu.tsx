import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div className="nav-container">
            <ul className="nav">
                <li className="nav__item">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="about">About</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="resume">Resume</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="portfolio">Portfolio</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="blog">Blog</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}