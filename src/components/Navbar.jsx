import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core';


export default function Navbar() {
    return (
        <div className='navigation'>
                <div className='navigation__items'>
                    <ul>
                        {/* <li><NavLink to='/dashboard'><Button variant="outlined" color="primary">Dashboard</Button></NavLink></li> */}
                        <li><NavLink to='/'><Button variant="outlined" color="primary">Home</Button></NavLink></li>

                        {/* {context.token && <li><NavLink to='/bookings'><Button variant="outlined" color="primary">Bookings</Button></NavLink></li>} */}
                        {/* {context.token && <li><button onClick={context.logout}  >Sign Out</button></li>} */}
                        {/* {context.email && <li>
                                <Button variant="outlined" color="primary" onClick={context.logout}>Sign Out</Button></li>} */}

                    </ul>
                </div>
        </div>
    )
}
