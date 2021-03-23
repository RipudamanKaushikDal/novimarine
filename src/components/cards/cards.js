import React from 'react'
import "./cards.scss"

const Cards = ({type,imageUrl,title,description,price,id,length,width,sternWidth,draft}) => {
    return (
        <>
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
                {price && <h3>{price}</h3>}
                {id && <h4>Listing #{id}</h4>}
                {length && <h4>Length: {length}</h4>}
                {width && <h4>Width: {width} </h4>}
                {sternWidth && <h4>Stern Width: {sternWidth}</h4>}
                {draft && <h4>Draft: {draft}</h4> }
                {description && <p>{description}</p>}
            </div>
        )}        
        </>
    )
}

export default Cards
