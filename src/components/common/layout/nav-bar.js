import React from "react"
import { useState } from "react"
import Icon from "../../../../static/images/icon.png"
import Hamburger from "../../../../public/images/hamburger_menu.png"
import "./NavBar.css"
import Cancel from "../../../../public/images/icn_Cancel.png"
import WhiteLogo from "../../../../public/images/white_logo.png"
import Socials from "./social/socials"
import List from "./list.js"
import Button from "../buttons/button"

const NavBar = () => {


    const [showMenu, setShowMenu] = useState(false);

    function toggleMobileMenu  () {
        setShowMenu(!showMenu);
    }

		const onClickTest = () => {
			console.log("join");
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
								<Button className="join" text="JOIN" onClick={onClickTest} />
                <div className="mobile_hamburger_menu">
                    <img src={Hamburger} id="mobile_hamburger_img" onClick={toggleMobileMenu}></img>
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
                    <Socials></Socials>
                </div>
                : ""                
            }
            
        </header>
    )

}

export default NavBar
