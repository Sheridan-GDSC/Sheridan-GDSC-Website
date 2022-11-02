import React from "react"
import { useState } from "react"
import "./NavBar.css"

import Icon from "../../../../../static/images/icon.png"
import Hamburger from "../../../../../static/images/hamburger_menu.png"
import Cancel from "../../../../../static/images/icn_Cancel.png"
import WhiteLogo from "../../../../../static/images/white_logo.png"

import Socials from "../social/socials"
import List from "./list.jsx"
import Button from "../../buttons/button"

const NavBar = () => {


    const [showMenu, setShowMenu] = useState(false);
    const [style, setStyle] = useState("no_style");
    const [display, setDisplay] = useState("none");
    const [right, setRight] = useState("-100%");
    let animationStyle = "";

    function toggleMobileMenu(id) {
        setShowMenu(!showMenu);
        if (id === 'open_menu') {
            animationStyle = "menu_appear";
            setDisplay("flex");
            setRight("100%");
        }
        if (id === 'close_menu') {
            animationStyle = "menu_disappear";
            setRight("-100%");
            setTimeout(() => {
                setDisplay("none");
            }, 500)
        }
        setStyle(animationStyle);
    }
    //Not used, check with Maizy/Sam
    // function displayNone() {
    //     setDisplay("none");

    // }

    const joinLink = "https://gdsc.community.dev/sheridan-college-trafalgar-road-campus/"

    return (
        <header className="nav-bar-header">
            <div className="outerDiv">
                <div className="icon">
                    <a href="/"><img src={Icon} alt="html tag with google colors"></img></a>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li><a href="#aboutUs">About</a></li>
                        <li><a href="#contactUs" className="contact">Contact Us</a></li>
                    </ul>
                </nav>
                <Button className="join" text="JOIN" onClick={() =>window.open(joinLink, "_blank")} />
                <div className="mobile_hamburger_menu">
                    <button className="hamburger_menu_button"
                        onClick={() => { toggleMobileMenu('open_menu') }}
                        onKeyDown={() => { toggleMobileMenu('open_menu') }}
                    >
                        <img src={Hamburger} id="mobile_hamburger_img"
                            alt="hamburguer menu button">
                        </img>
                    </button>
                </div>
            </div>

            <div className="hidden_menu" id={style} style={{ display: display, right: right }}>
                <div id="cancel_icn">
                    <button className="hamburger_menu_button"
                        onClick={() => { toggleMobileMenu('close_menu') }}
                        onKeyDown={() => { toggleMobileMenu('close_menu') }}
                    >
                        <img src={Cancel} alt="close mobile menu" id="cancel"
                        // onClick={() => { toggleMobileMenu('close_menu') }}
                        // onKeyDown={() => { toggleMobileMenu('close_menu') }}
                        >
                        </img>
                    </button>
                </div>
                <div id="sher_brand_icn">
                    <img src={WhiteLogo} alt="html tag"></img>
                    <span>Sheridan</span>
                </div>
                <List></List>
                <Socials></Socials>
            </div>
        </header>
    )

}

export default NavBar
