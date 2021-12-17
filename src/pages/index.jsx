import * as React from "react"
import NavBar from "../components/common/layout/nav-bar.js"
import ContactUs from "../components/common/layout/contact_us.js"
import "./index.css"


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
