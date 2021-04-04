import React, { useContext } from 'react'
import GlobalContext from '../../context/global-context'
import Cards from '../cards/cards'
import "./listings.scss"

const Listings = () => {

    const {listRef} = useContext(GlobalContext)

    const testData = [{imageUrl:"https://images.pexels.com/photos/285937/pexels-photo-285937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                        title:"Commercial Boats",
                        class:"boats"
                    },
                    {imageUrl:"https://images.pexels.com/photos/5272931/pexels-photo-5272931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    title:"Seafood",
                    class:"seafood"
                },
                {imageUrl:"https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                title:"Licenses and Packages",
                class:"license"
            },
            {imageUrl:"https://images.pexels.com/photos/4822240/pexels-photo-4822240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title:"Equipment",
            class:"equipment"
        }]
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
