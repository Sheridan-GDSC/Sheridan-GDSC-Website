import React from "react";
import React_DOM from "react-dom";
import "./hidden_menu.css"
import Cancel from "../../../../../public/images/icn_Cancel.png"
import WhiteLogo from "../../../../../public/images/white_logo.png"
import Socials from "../social/socials"
import List from "../list.js"

const Hidden_Menu = () => {

    return(
            <div className="hidden_menu">
                    <div id="cancel_icn">
                        <img src={Cancel}></img>
                    </div>
                    <div id="sher_brand_icn">
                        <img src={WhiteLogo}></img>
                        <label>Sheridan</label>
                    </div>
                    <List></List>
                    <Socials></Socials>
            </div>
    )
}

export default Hidden_Menu