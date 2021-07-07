import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
export default function Slider({ data }) {

    const { galleryImage } = data
    console.log(galleryImage);

    return (
        <div>
            <div className="section-center">

                <Carousel slide={true}>
                    {
                        galleryImage.map((item, index) => {

                            console.log(item);

                            return (

                                <Carousel.Item key={index} className='section-center__img-container'>
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                    <img
                                        className="section-center__img"
                                        src={item}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>

            </div>
        </div>
    )
}
