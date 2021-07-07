import React, { Component } from 'react'
import { createContext } from 'react'

export const ProductContext = createContext()

export default class ProductContextProvider extends Component {

    state = {
        productList: [],
        shoppingCart:[]
    }

    setProducts = (productList) => {
        this.setState({
            productList
        })
    }

    addToShoppingCart = (product) => {
        const products = this.state.shoppingCart
        products.push(product)
        this.setState({
            shoppingCart:products
        })

        console.log(this.state);
    }

//    deleteFromShoppingCart = (id) => {
//         const products = this.state.shoppingCart
//         products.filter(item=>item.)
//         this.setState({
//             shoppingCart:products
//         })

//         console.log(this.state);
//     }

    valueObj = {
        setProducts: this.setProducts,
        addToShoppingCart:this.addToShoppingCart
    }
    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}
