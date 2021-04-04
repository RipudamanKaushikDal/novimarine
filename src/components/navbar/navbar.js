import React,{useState,useEffect, useContext} from 'react'
import { useLocation,NavLink } from 'react-router-dom';
import GlobalContext from '../../context/global-context';
import "./navbar.scss"

const Navbar = () => {

  const [shownav, setShownav] = useState(false);
  const {heroRef,aboutRef,listRef} = useContext(GlobalContext)
  const location = useLocation()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShownav(true);
      } else {
        setShownav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const scrollOptions= {behavior: "smooth", block: "center", inline: "nearest"}


    return (
        <div className={location.pathname==="/"? `navbar ${shownav && 'navbar__visible'}`: 'navbar navbar__visible'}>
          <div className="navbar__logo">
            <img src = "https://novimarinebrokers.com/images/4/logo_bot.jpg" alt = "logo" />  
            <h2>NOVI MARINE</h2>
          </div>
          <div className="navbar__links">
            <p onClick={() => heroRef.current.scrollIntoView(scrollOptions)}>Home</p>
            <p onClick={() => listRef.current.scrollIntoView(scrollOptions)}>Listing</p>
            <p onClick={() => aboutRef.current.scrollIntoView(scrollOptions)}>About</p>
          </div>
        </div>
    )
}

export default Navbar
