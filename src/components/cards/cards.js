import React from 'react'
import "./cards.scss"

const Cards = ({type,imageUrl,title,description}) => {
    return (
        <div className={`card ${type}`} style={{backgroundImage:`url(${imageUrl})`}}>
            {type==="home" && (
                <div className={`card ${type}__title`}>
                    {title}
                </div>
            )}
            {type==="listing" && <img src={imageUrl} alt="image" />}
            {type==="listing" && <p>{description}</p>}
        </div>
    )
}

export default Cards
