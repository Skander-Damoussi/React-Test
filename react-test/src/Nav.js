import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Nav() {
const navStyle = {
    color: 'white'
};


    return (
        <nav>
            <img alt="React-logo" width="60" src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"/>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/Fakta'>
                    <li>Fakta</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;