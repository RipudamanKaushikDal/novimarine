import React from 'react'
import Cards from '../cards/cards'
import "./search.scss"


const testList = {
    id: 9871,
    title:"Fiberglass Over Wood",
    imageUrl:"https://cobaltboats.com/wp-content/uploads/2018/05/Boat-sterndrive-rseries-R5-large.png",
    price:"$7,000",
    length: `34'11"`,
    width: `16'0"`,
    sternWidth: `15'5"`,
    draft: `4'0"`,
    description:"This boat was used for mossing and comes with trailer suitable for a 20' boat. Comes with an easy"
}

const Search = () => {
    return (
        <section className="search">
            <div className="search__bar">
                <input type="text" placeholder="Search the listing id" />
            </div>
            <div className="search__results">
                <Cards type="listing" {...testList} />
                <Cards type="listing" {...testList} />
                <Cards type="listing" {...testList} />
            </div>
        </section>
    )
}

export default Search
