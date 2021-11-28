import React from "react"
import Icon from "../../../../static/images/icon.png"
import Hamburger from "../../../../public/images/hamburger_menu.png"
import List from "./list.js"
import "./NavBar.css"

const NavBar = () => {


    function toggleMobileMenu  () {
        console.log("clicked");
        let menu = document.getElementById("hidden_menu");
        if(menu.style.display == "none"){
            menu.style.display = "inline";
        } else {
            menu.style.display = "none"
        }
        
    }

    return (
        <header>
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
                <button class="join">JOIN</button>
                <div className="mobile_hamburger_menu">
                    <img src={Hamburger} onClick={toggleMobileMenu}></img>
                </div>
                <div id="hidden_menu">
                    <List></List>
                </div>
            </div>
        </header>
    )

}

export default NavBar
