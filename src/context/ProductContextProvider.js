import React, { Component } from 'react'
import { createContext } from 'react'

export const ProductContext = createContext()

export default class ProductContextProvider extends Component {

    state = {
        productList: [],
        shoppingCart: [],
        loader: false
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
            shoppingCart: products
        })
    }

    deleteFromShoppingCart = (id) => {
        const shoppingCart = this.state.shoppingCart.filter(item => item.id !== id)

        this.setState({
            shoppingCart
        })
    }

    handleLoader = (loader) => {
        this.setState({
            loader: loader
        })
    }
    valueObj = {
        setProducts: this.setProducts,
        addToShoppingCart: this.addToShoppingCart,
        deleteFromShoppingCart: this.deleteFromShoppingCart,
        handleLoader: this.handleLoader
    }
    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}
