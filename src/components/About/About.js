import React from 'react'
import "./About.scss"

const About = () => {
    return (
        <>
        <div className="parallax">
            <div className="parallax__overlay" />
        </div>
        <div className="about">
            <div className="about__header">
                <h1>About Us</h1>
                <div>
                <button className="about__buttons">Start Your Listing</button>
                <button className="about__buttons">Start Your Request</button>
                </div>
            </div>
           <p>While some commercial fishermen don't mind paying commission to a broker, our customers love the fact we give them different options to choose from.
            Some choices involve commission, and some don't.We believe that if you decide to sell your commercial boat and bypass the broker altogether, that's your business. If you want our help along the way, we're here.
            <b> Your Boat Your Terms</b> is about giving fishermen the freedom to choose and determine their own path.</p>    
        </div>
        </>
       
    )
}

export default About