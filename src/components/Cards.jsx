import React from 'react'
import './Cards.scss'
import { Link } from "react-router-dom";

export default function Cards({ data }) {

    const { fmyEngName, modelList, familyRecord } = data

    const model = modelList.map(item => {
        const arr = []
        arr.push(item)
        return arr
    })

    return (
        <div className='cards-container' >
            <Link to={"/product/" + familyRecord} >
                <h4>{fmyEngName}</h4>
                <img src={model[0][0].thumbUrl} alt={fmyEngName} className='cards-container__image' />
            </Link>
        </div>
    )
}
