import React,{useContext} from 'react';
import GlobalContext from '../../context/global-context';
import "./hero.scss";

const Hero = () => {

    const {heroRef} = useContext(GlobalContext)
    return (
        <section className="hero" ref={heroRef}>
        <div className="hero__overlay">
            <div className="hero__text-container">
                <h1>YOUR BOAT <br/> <span>YOUR TERMS</span></h1>        
                <p>
                    Don't want to pay for commission?
                    When it comes to selling, the choice is yours.
                </p>
                <button>Start Now</button>
            </div>
        </div>
    </section>
    )
}

export default Hero
