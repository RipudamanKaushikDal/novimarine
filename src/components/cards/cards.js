import React from 'react'
import {A} from 'hookrouter'
import "./cards.scss"

const Cards = ({type,cardClass,imageUrl,title,description,details}) => {
    return (
        <>
        {type === "home" ? (
            <A href={cardClass&&`/search/${cardClass}`}>
                <div className={`card ${type}`} style={{backgroundImage:`url(${imageUrl})`}}>
                    <div className={`card ${type}__title`}>
                        {title}
                    </div>
                </div>
            </A>
        ): (
            <A href={`/details/${cardClass}/${details.id}`}>
                <div className={`card ${type}`}>
                    <img src={imageUrl[0]} alt="image" />
                    <h2>{title}</h2>
                    {Object.keys(details).map(value => (
                        <h4>{value.toUpperCase()}: {details[value]}</h4>
                    ))}
                    {description && <p>{description}</p>}
                </div>
            </A>
        )}   
        </>     
      
    )
}

export default Cards
