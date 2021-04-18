import React,{useState} from 'react'
import "./slideshow.scss"

const SlideShow = ({imageCollection}) => {

    const [pictureUrl,setPictureUrl] = useState(imageCollection[0])

    return (
        <section className="slideshow">
            <div className="slideshow__thumbnails">
                {imageCollection.map(uri => (
                    <img src={uri} alt="thumbnail" onClick={() => setPictureUrl(uri)} key={uri} />
                ))}
            </div>
            <img src={pictureUrl} alt="Selected Image" className="slideshow__image--selected" />
        </section>
    )
}

export default SlideShow
