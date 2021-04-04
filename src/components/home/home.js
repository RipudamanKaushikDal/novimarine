import React,{useRef} from 'react';
import Hero from '../hero/hero';
import About from '../about/about';
import Listings from '../listings/listings';

const Home = () => {
    return (
        <>
        <Hero />
        <Listings />
        <About />
        </>
    )
}

export default Home
