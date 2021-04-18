import React, { useContext } from 'react'
import GlobalContext from '../../context/global-context'
import "./about.scss"

const About = () => {

    const {aboutRef} = useContext(GlobalContext)

    return (
        <>
        <div className="parallax" ref={aboutRef}>
            <div className="parallax__overlay" />
        </div>
        <div className="about">
            <div className="about__header">
                <h1>About Us</h1>
                <div>
                <button>Start Your Listing</button>
                <button >Start Your Request</button>
                </div>
            </div>
           <p>
            While some commercial fishermen don't mind paying commission to a broker, our customers love the fact we give them different options to choose from.
            Some choices involve commission, and some don't.We believe that if you decide to sell your commercial boat and bypass the broker altogether, that's your business. If you want our help along the way, we're here.
            <b> Your Boat Your Terms</b> is about giving fishermen the freedom to choose and determine their own path. <br />
            <br />
            Growing up in a fishing community, you learn at an early age that if someone needs your help they get it. Our Company changes the game and gives fishermen an equal footing when it comes to selling and buying.
            <b>Your Boat Your Terms</b> speaks to a new way of thinking.
            </p>    
        </div>
        </>
       
    )
}

export default About
