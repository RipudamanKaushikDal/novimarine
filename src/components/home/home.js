import React from 'react';
import About from '../about/about';
import Listings from '../listings/listings';
import "./home.scss";

const Home = () => {
    return (
        <>
        <section className="hero">
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
        <Listings />
        <About />
        </>
    )
}

export default Home
