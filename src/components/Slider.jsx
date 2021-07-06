import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
export default function Slider({data}) {
    console.log(data);
    return (
        <div>
            <div className="title">
                <h2>
                    <span>/</span>Happy Sliding ...
                </h2>
            </div>
            <div className="section-center">

                <Carousel slide={true}>
                    {
                        data.map((item, index) => {
                            const { fmyEngName } = item

                            console.log(fmyEngName);

                            return (
                               
                                <Carousel.Item key={index} className='section-center__img-container'>
                                    <Carousel.Caption>
                                        <h1>{fmyEngName}</h1>
                                    </Carousel.Caption>
                                    <img
                                        className="section-center__img"
                                        src='images.samsung.com/is/image/samsung/nl/galaxy-note20/gallery/nl-galaxy-tab-s7-t875-sm-t875nzkaeub-backmysticblack-thumb-278814609'
                                        alt="First slide"
                                    />
                                    {/* <h5>{email}</h5> */}
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>

            </div>
        </div>
    )
}
