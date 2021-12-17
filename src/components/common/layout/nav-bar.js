import React from "react"
import { useState } from "react"
import Icon from "../../../../static/images/icon.png"
import Cancel from "../../../../public/images/icn_Cancel.png"
import Hamburger from "../../../../public/images/hamburger_menu.png"
import WhiteLogo from "../../../../static/images/white_logo.png"
import List from "./list.js"
import "./NavBar.css"

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(true);

    function toggleMobileMenu  () {
        setShowMenu(!showMenu);
    }

    return (
        <header className="nav-bar-header">
            <div className="outerDiv">
                <div className="icon">
                    <img src={Icon}></img>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li><a>Events</a></li>
                        <li><a>About</a></li>
                        <li><a className="contact">Contact Us</a></li>
                    </ul>
                </nav>
                <button className="join">JOIN</button>
                <div className="mobile_hamburger_menu">
                    <img src={Hamburger} onClick={toggleMobileMenu}></img>
                </div>
            </div>
            
            { showMenu 
                ?
                <div className="hidden_menu">
                    <div id="cancel_icn">
                        <img src={Cancel} onClick={toggleMobileMenu}></img>
                    </div>
                    <div id="sher_brand_icn">
                        <img src={WhiteLogo}></img>
                        <label>Sheridan</label>
                    </div>
                    <List></List>
                    <div>
                        
                    </div>
                </div>
                : ""                
            }
            
        </header>
    )

}

export default NavBar
