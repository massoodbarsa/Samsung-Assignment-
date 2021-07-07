import React from 'react'
import Slider from '../components/Slider';
export default function ProductSpe({ data }) {

    const { galleryImage } = data

    return (
        <div className='productSpe'>
            <section>
                
                     <Slider data={data} />
                
            </section>
            <section>
                spe
            </section>
        </div>
    )
}
