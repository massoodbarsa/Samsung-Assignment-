import React from 'react'
import Slider from '../components/Slider';
import Rating from '@material-ui/lab/Rating';
import { Box, Chip, Divider } from '@material-ui/core';
import { faMemory, faTv, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductSpe({ data }) {

    const { displayName, thumbUrlAlt, modelCode, reviewCount, ratings, price, stockStatusText, fmyChipList, usp, pviSubtypeName, storePromotions } = data

    console.log(usp[0]);
    return (
        <div className='productSpe'>
            <section className='productSpe__slider'>

                <Slider data={data} />

            </section>
            <section className='productSpe__spe'>

                <div className='productSpe__spe__firstLine'>
                    <h5>{displayName} - {thumbUrlAlt}</h5>

                </div>

                <div className='productSpe__spe__secondLine'>
                    <p>{modelCode} </p>
                    <p>
                        <Box component="fieldset" mb={3} borderColor="transparent" >
                            <Rating name="read-only" value={ratings} precision={0.5} readOnly />
                        </Box>
                    </p>
                    <p> {ratings} ({reviewCount})</p>
                </div>

                <div className='productSpe__spe__thirdLine'>
                    <section>
                        <FontAwesomeIcon icon={faMemory} size='3x' />
                        <p>{fmyChipList[1].fmyChipName}</p>
                    </section>
                    <Divider orientation="vertical" flexItem />
                    {
                        pviSubtypeName === 'Tablet'
                            ? <section>
                                <FontAwesomeIcon icon={faTv} size='3x' />
                                <p>{usp[0]} - {usp[2]}</p>
                            </section>
                            : <section>
                                <FontAwesomeIcon icon={faMobile} size='3x' />
                                <p>{usp[0]} - {usp[1]}</p>
                            </section>
                    }
                </div>

                <div className='productSpe__spe__forthLine'>
                    <h5>$ {price} </h5>


                </div>

            </section>
            <Divider orientation="vertical" flexItem />

            <section className='productSpe__info'>
                {
                    stockStatusText === 'outOfStock'
                        ? <Chip
                            label="Out of stock"
                            color="secondary"
                        />
                        : <Chip
                            label=" Available"
                            color="primary" />
                }            </section>
        </div>
    )
}
