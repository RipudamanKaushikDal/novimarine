import React, { useContext } from 'react'
import {testData} from '../../staticData'
import GlobalContext from '../../context/global-context'
import Cards from '../cards/cards'
import "./listings.scss"

const Listings = () => {

    const {listRef} = useContext(GlobalContext)

   
    return (
        <section className="listings" ref={listRef}>

        <h1>Browse Listings</h1>
        <div className="listings__row">
           {testData.map(category => <Cards type="home" cardClass={category.class} imageUrl={category.imageUrl} title={category.title} />)} 
        </div>
        </section>
    )
}

export default Listings
