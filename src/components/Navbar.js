import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="Navbar">
            <div id="logo">
                <h2 className="middle">Moon Yoga</h2>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/classes">classes</NavLink></li>
                    <li><NavLink to="/blog">blog</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar