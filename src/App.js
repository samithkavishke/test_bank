import "./App.css"
import React from "react"
import axios from "axios"
import LoginPopup from "./popups/Login"
import Account from "./pages/Account"
import Welcome from "./pages/Welcome"
import AuthContextProvider, { AuthContext } from "./context/AuthContext"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AccountContextProvider from "./context/AccountContext"
import CurrentAccountContextProvider from "./context/CurrentAccountContext"
import FDContextProvider from "./context/FDContext"
import { Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";
import Profile from "./pages/Profiles"

function App() {
  const { user,username, userType, login, logout } = React.useContext(AuthContext)
  const cookies = new Cookies();

  React.useEffect(() => {
    const fetchData = async () => {
    if (cookies.get("user") !== undefined) {
      await login(cookies.get("user").user)
      console.log("Cookie",cookies.get("user").user)
    }
    console.log("usertype",userType)
  }
  fetchData()
  },[])

  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        </Routes>
          <AccountContextProvider>
          <CurrentAccountContextProvider>
          <FDContextProvider>
          <Routes>
            <Route path="/account" element={<Account />} />
           </Routes>
            </FDContextProvider>
           </CurrentAccountContextProvider>
          </AccountContextProvider>
        <Routes>
        <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Welcome /> */}
        </Router>
    </div>
  )
}


export default App