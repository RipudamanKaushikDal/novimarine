import React from 'react'
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src="https://novimarinebrokers.com/images/4/logo_bot.jpg" />
            </div>
            <div className="footer__details">

                <span>
                    Address : <br />
                    674 Main St <br/>
                    Yarmouth, Nova Scotia <br />
                    Canada B5A 1K3
                </span>

                <span>
                    Phone: (902) 742-7207 <br />
                    Toll Free: 1-866-303-NOVI (6684) <br />
                    Fax: (902) 742-6539 <br />
                    request@novimarinebrokers.com
                </span>
            </div>
        </div>
    )
}

export default Footer
