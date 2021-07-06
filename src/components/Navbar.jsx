import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core';


export default function Navbar() {
    return (
        <div className='navigation'>
            <div className='navigation__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' alt="React Logo" />
            </div>
            <div className='navigation__items'>
                <ul>
                    <li><NavLink to='/'><Button variant="outlined" color="primary">Home</Button></NavLink></li>
                </ul>
            </div>
        </div>
    )
}
