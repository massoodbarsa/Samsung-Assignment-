import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import Cards from '../components/Cards'
import './Home.scss'
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Home() {

    const context = useContext(ProductContext)

    const { productList } = context

    return (
        <>
            <div className='grid_list'>
                {
                    productList.map((item, index) => {
                        return <Cards key={index} data={item} />
                    })
                }
            </div>

            {context.loader && <div className='linearProgress'><LinearProgress /></div>}

        </>
    )
}
