import React from 'react'
import { CardContent, CardActions, Card, CardActionArea, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Cards.scss'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '0 30px',
    },
    media: {
        height: 140,
    },
});

export default function Cards({ data }) {

    const { fmyEngName, modelList ,familyRecord} = data

    const model = modelList.map(item => {
        const arr = []
        arr.push(item)
        return arr
    })

    return (
        <div className='container' >
            <Link to={"/product/" + familyRecord} >
            <h2>{fmyEngName}</h2>
            <img src={model[0][0].thumbUrl} alt={fmyEngName} />
            </Link>

        </div>
    )
}


{/* <div className='container'>
<h2>{data.fmyMarketingName}</h2>
{
    modelList.map(item)
}
<img src="https://images.samsung.com/is/image/samsung/nl/galaxy-note20/gallery/nl-galaxy-tab-s7-t875-sm-t875nzkaeub-backmysticblack-thumb-278814609" alt="" />
</div> */}