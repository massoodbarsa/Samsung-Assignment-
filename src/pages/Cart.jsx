import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

                            </section>
                            <section>
                                <p>{name}</p>
                            </section>
                            <section className='shop-container__items__price'>
                                <p>${price}</p>
                            </section>

                            <section className='shop-container__items__trash' >

                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    // size='2x'
                                    onClick={() => context.deleteFromShoppingCart(id)}

                                />

                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}
