import React from 'react'
import {A} from 'hookrouter'
import "./cards.scss"

const Cards = ({type,cardClass,imageUrl,title,description,details}) => {
    return (
        <A href={cardClass? `/search/${cardClass}`: '#'}>
        {type === "home" ? (
            <div className={`card ${type}`} style={{backgroundImage:`url(${imageUrl})`}}>
                <div className={`card ${type}__title`}>
                    {title}
                </div>
            </div>
        ): (
            <div className={`card ${type}`}>
                <img src={imageUrl} alt="image" />
                <h2>{title}</h2>
                {Object.keys(details).map(value => (
                    <h4>{value.toUpperCase()}: {details[value]}</h4>
                ))}
                {description && <p>{description}</p>}
            </div>
        )}        
        </A>
    )
}

export default Cards
