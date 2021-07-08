import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'

import Slider from '../components/Slider';
import Rating from '@material-ui/lab/Rating';
import { Box, Chip, Divider, Button } from '@material-ui/core';
import { faMemory, faTv, faMobile, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid';

export default function ProductSpe({ data }) {

    const context = useContext(ProductContext)
    const uuId = uuidv4()

    const {
        displayName,
        thumbUrlAlt,
        modelCode,
        reviewCount,
        ratings,
        price,
        stockStatusText,
        fmyChipList,
        usp,
        pviSubtypeName,
        storePromotions,
        thumbUrl
    } = data

    let promotion = null
    if (storePromotions) {
        const promotions = storePromotions.map(i => i)
        promotion = promotions[0].promotionText.slice(3).slice(0, -4);
    }

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
                    <p className='modelCode'> {modelCode} </p>
                    <Box component="fieldset" mb={3} borderColor="transparent" >
                        <Rating name="read-only" value={parseFloat(ratings)} precision={0.1} readOnly />
                    </Box>
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

                    <Divider orientation="vertical" flexItem />
                    <section>
                        <FontAwesomeIcon icon={faCircle} size='3x' color={fmyChipList[0].fmyChipCode} />
                        <p>{fmyChipList[0].fmyChipLocalName}</p>

                    </section>

                </div>
                <div className='productSpe__spe__forthLine'>
                    <section>
                        <h5>$ {price} </h5>
                    </section>
                    <section>
                        <Button
                            variant='outlined'
                            color="primary"
                            className='btn'
                            onClick={() => context.addToShoppingCart
                                (
                                    {
                                        name: displayName,
                                        url: thumbUrl,
                                        price: price,
                                        id: uuId
                                    }
                                )}
                        >
                            Buy
                        </Button>
                    </section>
                </div>

            </section>

            <Divider orientation="vertical" flexItem />

            <section className='productSpe__info'>
                {
                    stockStatusText === 'outOfStock'
                        ? <Chip
                            label="Out of stock"
                            color="secondary"
                            className='chip'
                        />
                        : <Chip
                            label=" Available"
                            color="primary"
                            className='chip'
                        />


                }
                <p>{promotion}</p>
            </section>
        </div>
    )
}
