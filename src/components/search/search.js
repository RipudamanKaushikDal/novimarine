import React,{useRef,useEffect} from 'react'
import Cards from '../cards/cards'
import {testList} from '../../staticData'
import "./search.scss"

const Search = ({category}) => {

    const searchRef = useRef(null)

    const repeatArray = ["1","2","3"]

    useEffect (() => {
        searchRef.current.scrollIntoView({block: "center", inline: "nearest"})
    },[])

    return (
        <section className="search" >
            <input type="text" placeholder="Search the listing id" className="search__bar" ref={searchRef} />

            {category !== ":category" || null ?
            <div className="search__results">
                {repeatArray.map(val => (
                    <Cards type="listing" key={val} cardClass={category} {...testList?.[category]} />
                ))}
            </div> : null}
        </section>
    )
}

export default Search
