import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'

import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { Button, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 3px',
    },
}))(Badge);

export default function Navbar() {

    const context = useContext(ProductContext)

    const { shoppingCart } = context

    return (
        <div className='navigation'>
            <div className='navigation__logo'>
                <NavLink to='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' alt="React Logo" />
                </NavLink>
            </div>
            <div className='navigation__items'>
                <ul>
                    <li><NavLink to='/'><Button variant="outlined" color="primary">Home</Button></NavLink></li>
                    <li>
                        {shoppingCart.length > 0 && <IconButton aria-label="cart" color='primary'>
                            <StyledBadge badgeContent={shoppingCart.length} color="secondary">

                                <NavLink to='/cart'>  <ShoppingCartIcon /></NavLink>

                            </StyledBadge>
                        </IconButton>}
                    </li>
                </ul>
            </div>
        </div>
    )
}
