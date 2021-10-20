import React from "react"
import Icon from "../../../../static/images/icon.png"
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <div className="header outerDiv">
                <div className="icon">
                    <img src={Icon}></img>
                </div>
                <div className="nav-bar">
                    <nav>
                        <ul>
                            <li><a>Events</a></li>
                            <li><a>About</a></li>
                            <li><a className="contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>


        </header>

    )
}

export default NavBar
