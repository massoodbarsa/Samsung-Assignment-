import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'

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
                            <img src={item[1]} alt="" />
                            <p>{item[0]}</p>
                            <p>${item[2]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
