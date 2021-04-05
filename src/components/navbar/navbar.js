import React,{useState,useEffect, useContext} from 'react'
import {usePath,A} from 'hookrouter';
import GlobalContext from '../../context/global-context';
import "./navbar.scss"

const Navbar = () => {

  const [shownav, setShownav] = useState(false);
  const {heroRef,aboutRef,listRef} = useContext(GlobalContext)
  //const location = useLocation()
  const path = usePath()

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
        <div className={path==="/"? `navbar ${shownav && 'navbar__visible'}`: 'navbar navbar__visible'}>
          <div className="navbar__logo">
            <img src = "https://novimarinebrokers.com/images/4/logo_bot.jpg" alt = "logo" />  
            <h2>NOVI MARINE</h2>
          </div>
          {
            path === "/" ? 
            (
              <div className="navbar__links">
                <div onClick={() => heroRef.current.scrollIntoView(scrollOptions)}><p>Home</p></div>
                <div onClick={() => listRef.current.scrollIntoView(scrollOptions)}><p>Listing</p></div>
                <div onClick={() => aboutRef.current.scrollIntoView(scrollOptions)}><p>About</p></div>
                <A href="/search/:category">Search</A>
              </div>
            ) : (
              <div className="navbar__links">
                <A href="/">Home</A>
                <A href="/search/:category">Search</A>
              </div>
            )
          }
         
        </div>
    )
}

export default Navbar
