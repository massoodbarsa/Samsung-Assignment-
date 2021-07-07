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
            <img src={model[0][0].thumbUrl} alt={fmyEngName} className='container__image'/>
            </Link>
        </div>
    )
}
