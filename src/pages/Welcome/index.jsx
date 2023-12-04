import React from "react"
import Navbar from "../../components/NavBar.jsx"
import Footer from "../../components/Footer.jsx"
import Content from "./Content.jsx"

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Content/>
      <Footer/>
    </div>
  )
}

export default Welcome
