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
import HideInput from "../components/HideInput"
import LoanRequestPopup from "./LoanRequest"


export default function LoanRequestPopup(props) {


  const { onClose, open } = props
  const [FDDetails, setFDDetails] = React.useState("")
  const [Amount, setAmount] = React.useState("")
  const [LoanPeriod, setLoanPeriod] = React.useState("")
  
  const [loginOpen, setLoginOpen] = React.useState(false)

  const handleFDDtailsChange = (newFDDetails) => {
    setFDDetails(newFDDetails)
  }
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount)
  }
  const handleLoanPeriodChange = (newLoanPeriod) => {
    setLoanPeriod(newLoanPeriod)
  }
  // const handleConfirmPasswordChange = (newConfirmPassword) => {
  //   setConfirmPassword(newConfirmPassword)
  // }
  const handleClose = () => {
    onClose(true)
  }
  const handleLoginOpen = () => {
    setLoginOpen(true)
  }
  const handleLoginClose = () => {
    setLoginOpen(false)
  }
  // const handlePasswordmatch = ()=> {
      
  // }
  const handleRegister = () => {
    const data = {
      FDDetails: "PQR4526801",
      Amount: "Rasa Dias",
      LoanPeriod:"123456",
    }
    // const data = {
    //   NIC: NICNumber,
    //   username: Username,
    //   password:Password,
    // }
    console.log(data)
    api
      .post("/user/registerCustomer", data)
      .then((response) => {
        if (response.data.approved){
          console.log("Register successful!", response.data)
          handleLoginOpen() 
        }
        else{
          console.log("Register unsuccessful!", response.data)
        }   
        // onClose(true)
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
          Request Loan
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
              Related FD Details :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              {/* <TextInput onValueChange={handleNICNumberChange} /> */}
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
              Amount :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              {/* <TextInput onValueChange={handleUsernameChange} /> */}
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
              Loan Period :
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              {/* <HideInput onValueChange={handlePasswordChange} /> */}
            </Box>
          </Grid>
          {/* <Grid item xs={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "20px 70px",
              }}
              fontFamily={"Inter"}
            >
              Confirm Password :
            </Typography>
          </Grid> */}
          {/* <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <HideInput onValueChange={handleConfirmPasswordChange} />
            </Box>
          </Grid> */}
        </Grid>
        {/* { Password!==ConfirmPassword ?<Typography sx={{
                color: "white",
                fontSize: 18,
                fontWeight: 400,
                padding: "10px 10px",
              }}
              fontFamily={"Inter"}>Not Matched</Typography>:  <Box sx={{widows:"100px 100px"}}></Box>} */}
        <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
          }}
        >
          
          <YellowButton text="Proceed" onClick={handleRegister} />
        </Box>
      </Box>
      <LoginPopup onClose={handleLoginClose} open={loginOpen} />
    </Dialog>
  )
}

LoanRequestPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}