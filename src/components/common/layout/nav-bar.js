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
    const [style, setStyle] = useState("no_style");
		const [display, setDisplay] = useState("none");
		const [right, setRight] = useState("-100%");		
    let animationStyle = "";

    function toggleMobileMenu  (id) {
        setShowMenu(!showMenu);
				if(id == 'open_menu'){
					animationStyle = "menu_appear";
					setDisplay("flex");
					setRight("100%");
				} 
				if (id == 'close_menu'){
					animationStyle = "menu_disappear";
					setRight("-100%");
					setTimeout(()=>{
						setDisplay("none");
					},500)
				}
				setStyle(animationStyle);
    }

	   function displayNone(){
			setDisplay("none");

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
                    <img src={Hamburger} id="mobile_hamburger_img" onClick={() =>{
											toggleMobileMenu('open_menu')}}>       
                    </img>
                </div>
            </div>
            
                <div className="hidden_menu" id={style} style={{display: display, right: right}}>
                    <div id="cancel_icn">
                        <img src={Cancel} id="cancel"	onClick={() => {
													toggleMobileMenu('close_menu');}}>
												</img>
                    </div>
                    <div id="sher_brand_icn">
                        <img src={WhiteLogo}></img>
                        <label>Sheridan</label>
                    </div>
                    <List></List>
                    <Socials></Socials>
                </div>  
        </header>
    )

}

export default NavBar
