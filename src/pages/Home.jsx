import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import Cards from '../components/Cards'
export default function Home() {

    const context = useContext(ProductContext)

    const { productList } = context

    const products = Object.keys(productList).map(item => {
        return productList[item]
    })

    return (
        <div>
            {
                products.map(item => {
                    return item.map(i => {
                        return <Cards data={i} />
                    })
                })
            }
        </div>
    )
}
