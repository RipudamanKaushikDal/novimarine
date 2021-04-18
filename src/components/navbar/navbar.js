import React,{useState,useEffect, useContext} from 'react'
import {usePath,A} from 'hookrouter';
import GlobalContext from '../../context/global-context';
import HomeIcon from '@material-ui/icons/Home';
import DnsIcon from '@material-ui/icons/Dns';
import BusinessIcon from '@material-ui/icons/Business';
import SearchIcon from '@material-ui/icons/Search';
import "./navbar.scss"

const Navbar = () => {

  const [shownav, setShownav] = useState(false);
  const {heroRef,aboutRef,listRef} = useContext(GlobalContext)
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
                <div onClick={() => heroRef.current.scrollIntoView(scrollOptions)}>
                  <HomeIcon />
                  <p>Home</p>
                </div>
                <div onClick={() => listRef.current.scrollIntoView(scrollOptions)}>
                  <DnsIcon />
                  <p>Listing</p>
                </div>
                <div onClick={() => aboutRef.current.scrollIntoView(scrollOptions)}>
                  <BusinessIcon />
                  <p>About</p>
                </div>
                <div>
                  <SearchIcon />
                  <A href="/search/:category">Search</A>
                </div>
              </div>
            ) : (
              <div className="navbar__links">
                <div>
                  <HomeIcon />
                  <A href="/">Home</A>
                </div>
                <div>
                  <SearchIcon />
                  <A href="/search/:category">Search</A>
                </div>
              </div>
            )
          }
         
        </div>
    )
}

export default Navbar
