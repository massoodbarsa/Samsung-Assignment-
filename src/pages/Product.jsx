import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContextProvider'


export default function Product(props) {

    const context = useContext(ProductContext)

    const { id } = useParams()

    const products = context.productList.filter(item =>
        item.familyRecord === id
    )

    return (
        <div >
            <p> {products[0].fmyEngName}</p>
        </div>
    )
}
