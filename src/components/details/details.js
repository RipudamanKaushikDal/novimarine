import React from 'react'
import './details.scss'
import SlideShow from '../slideshow/slideshow'
import {testList} from "../../staticData"

const Details = ({category,id}) => {

    const selectedProduct = testList[category]
    
    return (
        <section className="details">
            <SlideShow imageCollection={selectedProduct.imageUrl} />
            <div className="details__info">
                <span>{selectedProduct.title}</span>
                <span>{selectedProduct.details.price}</span>
                <p>{selectedProduct.description}</p>
            </div>
        </section>
    )
}

export default Details
