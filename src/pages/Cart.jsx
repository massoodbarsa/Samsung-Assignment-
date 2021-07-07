import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import { Button } from '@material-ui/core';

import './Cart.scss'

export default function Cart() {

    const context = useContext(ProductContext)
    const { shoppingCart } = context

    return (
        <div className='shop-container'>
            <h3>Cart</h3>

            {
                shoppingCart.map((item, index) => {
                    const { name, price, url, id } = item

                    return (
                        <div className='shop-container__items' key={index}>

                            <section className='shop-container__items__desc'>
                                <img src={url} alt="" />
                                <p>{name}</p>
                            </section>
                            <section className='shop-container__items__price'>
                                <p>${price}</p>
                            </section>

                            <Button
                                variant='outlined'
                                color="secondary"
                                className='btn'
                                onClick={() => context.deleteFromShoppingCart(id)}
                            >
                                Delete
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
}
