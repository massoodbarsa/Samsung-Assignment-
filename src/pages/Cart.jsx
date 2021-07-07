import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import { Button } from '@material-ui/core';

import './Cart.scss'

export default function Cart() {
    const context = useContext(ProductContext)
    const { shoppingCart } = context


    return (
        <div className='shop-container'>
            <h2>Cart</h2>

            {
                shoppingCart.map((item, index) => {
                    return (
                        <div className='shop-container__items' key={index}>

                            <section className='shop-container__items__desc'>
                                <img src={item[1]} alt="" />
                                <p>{item[0]}</p>
                            </section>
                            <section className='shop-container__items__price'>
                                <p>${item[2]}</p>
                            </section>

                            <Button
                            variant='outlined'
                            color="secondary"
                            className='btn'
                            // onClick={() => context.addToShoppingCart
                            //     ([
                                   
                            //         displayName,
                            //         thumbUrl,
                            //         price,
                            //         uuId
                            //     ])}
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
