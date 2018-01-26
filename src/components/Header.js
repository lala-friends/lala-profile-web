import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header container">
            <NavLink exact to="/" className="logo">LALA FRIENDS</NavLink>
            <div className="menus">
                <NavLink exact to="/about" className="menu">About us</NavLink>
                <NavLink exact to="/project" className="menu">Project</NavLink>
            </div>
        </div>
    );
};

export default Header;