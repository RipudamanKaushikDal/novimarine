import React from 'react'
import {useParams} from "react-router-dom"
import Cards from '../cards/cards'
import "./search.scss"


const testList = {
    boats:{
        title:"Fiberglass Over Wood",
        imageUrl:"https://cobaltboats.com/wp-content/uploads/2018/05/Boat-sterndrive-rseries-R5-large.png",
        description:"This boat was used for mossing and comes with trailer suitable for a 20' boat. Comes with an easy",
        details:{
            price:"$7,000",
            id: 9871,
            length: `34'11"`,
            width: `16'0"`,
            sternWidth: `15'5"`,
            draft: `4'0"`,
        },
        
    },
    seafood:{
        title:"GroundFish",
        imageUrl:"https://divcomplatform.s3.amazonaws.com/www.seafoodsource.com/images/278cc9db585d597e14563fefc80c5c25.jpeg",
        description:"2000 lbs of Perm Halibut Quota Shelburne Group text 902-740-3557 to find out more or offer",
        details:{
            price:"$950,000",
            id: 10168,
        },
    },
    license:{
        title:"Crab License",
        imageUrl:"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Crab-body-7f9ae78.jpg?quality=90&resize=550%2C500",
        description:"For Sale 110,000 lbs of 2j crab looking for offers Call 902-742-7207 to make offers",
        details:{
            price:"Sold",
            id: 10364,
            region: "Newfoundland & Labrador",
            area: "Crab Fishing Area - 2J (2)"
        },

    },
    equipment:{
        title:"Wire",
        imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81VT3eZiVvL._AC_SX425_.jpg",
        description:`Wire 1" 6X19 FC galv RRL EIPS Seale construction. Approximately 17,000 ft. available`,
        details:{
            price:"$2.98",
            id:7087,
            type: "Fishing", 
            gearProduct: "Wire"
        }
    }
}

const Search = () => {

    const {category} = useParams()
    return (
        <section className="search">
            <div className="search__bar">
                <input type="text" placeholder="Search the listing id" />
            </div>
            <div className="search__results">
                <Cards type="listing" {...testList?.[category]} />
            </div>
        </section>
    )
}

export default Search
