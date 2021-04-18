import React from 'react'
import './details.scss'
import SlideShow from '../slideshow/slideshow'
import {testList} from "../../staticData"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const Details = ({category,id}) => {

    const selectedProduct = testList[category]
    
    return (
        <section className="details">
            <SlideShow imageCollection={selectedProduct.imageUrl} />
            <div className="details__info">
                <span>{selectedProduct.title}</span>
                <span>{selectedProduct.details.price}</span>
                <div className="details__social">
                    <FacebookIcon fontSize="large" color="primary" />
                    <InstagramIcon fontSize="large" color="secondary" />
                    <TwitterIcon fontSize="large" color="primary" />
                    <EmailIcon fontSize="large" color="error" />
                </div>
                <p>{selectedProduct.description}</p>
            </div>
        </section>
    )
}

export default Details
