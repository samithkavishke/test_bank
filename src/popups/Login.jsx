import * as React from "react"

import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import Typography from "@mui/material/Typography"
import { Box, Grid } from "@mui/material"
import TextInput from "../components/TextInput"
import YellowButton from "../components/YellowButton"
import axios from "axios"
import api from "../apiConfig"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HideInput from "../components/HideInput"
import Cookies from "universal-cookie"
import { Alert } from "@mui/material"

export default function LoginPopup(props) {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const { user, username, userType, login, logout } = useContext(AuthContext)
  const { onClose, open } = props
  const [nic, setNic] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [accountSelect, setAccountSelect] = React.useState(0)

  const [showAlert, setShowAlert] = React.useState(false)
  const [alertTimeout, setAlertTimeout] = React.useState(null)
  const alertDuration = 5 // Duration in seconds

  const handleButtonClick = (goToAccount) => {
    setAccountSelect(goToAccount)
  }

  const handleClose = () => {
    onClose(true)
  }
  const handleNicChange = (newNic) => {
    setNic(newNic)
  }
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword)
  }

  const handleLogin = () => {
    const data = {
      NIC: nic,
      password: password,
    }
    // Make a POST request to your server
    api
      .post("/user/login", data) // Replace "/api/login" with your actual API endpoint
      .then((response) => {
        // Handle the response as needed
        if (response.data.approved) {
          if (response.data.user.user_type === "customer") {
            console.log("Login successful!", response.data)
            login(response.data.user)
            console.log(response.data.user)
            const user = response.data.user
            cookies.set("user", { user }, { path: "/" })
            onClose(true)

            //user(response.data.customer_NIC)
            navigate("/account")
          } else {
            setShowAlert(true) // Set the state to show the alert
            setAlertTimeout(
              setTimeout(() => {
                setShowAlert(false)
              }, alertDuration * 1000)
            )
            console.log("Login successful!", response.data)
          }
        } else {
          setShowAlert(true) // Set the state to show the alert
          setAlertTimeout(
            setTimeout(() => {
              setShowAlert(false)
            }, alertDuration * 1000)
          )
          console.log("Login unsuccessful!", response.data)
        }
        // You can also close the dialog or perform other actions on success
      })
      .catch((error) => {
        // Handle errors
        console.error("Login failed:", error)
      })
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "black", // Set the background color to black
          margin: 0.1, // Remove the default margin
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        {showAlert && (
          <Alert severity="error">Login unsuccessful! Not a User</Alert>
        )}
        <Typography
          sx={{
            color: "white",
            fontSize: 30,
            fontWeight: 600,
            padding: "0px 0px 20px 0px",
          }}
          fontFamily={"Inter"}
          align="center"
        >
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              NIC Number:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleNicChange} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Password :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              {/* <TextInput onValueChange={handlePasswordChange} isPassword ={true} /> */}
              <HideInput onValueChange={handlePasswordChange} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
          }}
        >
          <YellowButton text="Login" onClick={handleLogin} />
        </Box>
      </Box>
    </Dialog>
  )
}

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
