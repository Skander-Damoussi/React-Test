import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Nav() {
const navStyle = {
    color: 'white'
};


    return (
        <nav>
            
            <ul className="nav-links">
            <img alt="React-logo" width="40" src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"/>
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