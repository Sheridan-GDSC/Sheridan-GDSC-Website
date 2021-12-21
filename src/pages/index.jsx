import * as React from "react"
import NavBar from "../components/common/layout/nav-bar.js"
import ContactUs from "../components/common/layout/contact_us.js"
import "./index.css"
import Hidden_Menu from "../components/common/layout/app_menu/hidden_menu.js"
import { useState } from "react"


// markup
const IndexPage = () => {

  return (
  <div className="page-body">
      <NavBar></NavBar>
      <ContactUs></ContactUs>
  </div>
  )
}

export default IndexPage
