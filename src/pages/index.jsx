import * as React from "react";

import NavBar from "../components/common/layout/navbar/nav-bar.jsx"
import ContactUs from "../components/common/layout/contact-us/contact_us.jsx"
import AboutUs from "../components/common/layout/about-us/about-us.jsx"
import "./index.css"
import Landing from "../components/common/layout/landing/Landing.jsx";

const IndexPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Landing></Landing>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </>
  )
};

export default IndexPage;