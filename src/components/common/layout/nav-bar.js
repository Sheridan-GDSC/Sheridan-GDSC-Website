import React from "react"
import Icon from "../../../../static/images/icon.png"
import "./NavBar.css"

const NavBar = () => {
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
            </div>
        </header>
    )
}

export default NavBar
