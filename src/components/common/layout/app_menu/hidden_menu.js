import React from "react";
import "./hidden_menu.css"
import Cancel from "../../../../../public/images/icn_Cancel.png"
import WhiteLogo from "../../../../../public/images/white_logo.png"
import Socials from "../social/socials"
import List from "../list.js"
import { useState } from "react";

const Hidden_Menu = ({selectedMode}) => {

    function menuDisappear () {
       // setSelectedMode("none")
    }

    return(
            <div className="hidden_menu">
                    <div id="cancel_icn">
                        <img src={Cancel} onClick={menuDisappear}></img>
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