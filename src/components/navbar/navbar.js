import React,{useState,useEffect} from 'react'
import "./navbar.scss"

const Navbar = () => {

  const [shownav, setShownav] = useState(false);

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

    return (
        <div className={ `navbar ${shownav && 'navbar__visible'}`}>
          <div className="navbar__logo">
            <img src = "https://novimarinebrokers.com/images/4/logo_bot.jpg" alt = "logo" />  
            <h2>NOVI MARINE</h2>
          </div>
          <div className="navbar__links">
            <p>Home</p>
            <p>Listings</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
    )
}

export default Navbar
