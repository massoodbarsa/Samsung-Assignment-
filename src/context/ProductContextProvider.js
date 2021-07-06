import React, { Component } from 'react'
import { createContext } from 'react'

export const ProductContext = createContext()

export default class ProductContextProvider extends Component {

    state = {
        productList: []
    }

    setProducts = (productList) => {
        this.setState({
            productList
        })
    }

    valueObj = {
        setProducts: this.setProducts
    }
    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, ...this.valueObj }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}
