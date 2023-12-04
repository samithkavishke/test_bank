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
import {FDContext} from "../context/FDContext"
import HideInput from "../components/HideInput"
import LoginPopup from "./Login"
import SuccessfulPopup from "./Successful"

export default function OnlineLoanRequestPopup(props) {

  const { user, username,userType, login, logout } = useContext(AuthContext)
  const { onClose, open } = props
  const [RequestingAmount, setRequestingAmount] = React.useState("")
  const [Period, setPeriod] = React.useState("")
  const[maxLoan,setMaxLoan]=React.useState(0)
  const [successfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false)
  const [outPutMessage , setOutPutMessage] = React.useState("")
  const {FD , saveAccount,amount,plan_id,setCustomerFD} = useContext(FDContext)
  const handleSuccessfulPopupOpen = (message) => {
    setOutPutMessage(message)
    setSuccessfulPopupOpen(true)
  }
  const handleSuccessfulPopupClose = () => {
    setSuccessfulPopupOpen(false)
  }

  const handleRequestingAmountChange = (newRequestingAmount) => {
    setRequestingAmount(newRequestingAmount)
  }
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod)
  }
  
  const handleClose = () => {
    onClose(true)
  }
  const handleLoan = () => {
    const data = {
      amount: RequestingAmount,
      loan_period: Period,
      customer_NIC: user,
      saving_account_number: saveAccount,
      FD_id: FD,
      max_loan: maxLoan

    }
    api
      .post("/loan/createOnlineLoan",data)
      
      .then((response) => {
        if (response.data.approved){
        console.log("loan implemented!")
        console.log(response.data.message)
        handleSuccessfulPopupOpen(response.data.message)
        //handleClose()
        
        }
        else{console.log("something went wrong!", response.data)}})
      .catch((error) => {
        // Handle errors
        console.error("account details fetching failed:", error)
      })

  }
  React.useEffect(() => {
    api
      .post("/FD/getMaxLoanForFD",{
        FD_id: FD})
      
      .then((response) => {
        if (response.data.approved){
        console.log("max Loan fetched!", response.data.loan_amount)
        setMaxLoan(response.data.loan_amount)
        }
        else{console.log("something went wrong!", response.data)}})
      .catch((error) => {
        // Handle errors
        console.error("account details fetching failed:", error)
      })
    }
  , [FD])
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <SuccessfulPopup open={successfulPopupOpen} onClose={handleSuccessfulPopupClose} value={outPutMessage}/>
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
          Online Loan Request
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            padding: "0px 0px 20px 70px",
          }}
          fontFamily={"Inter"}
          align="Left"
        >
          FD Details
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
              Related Saving Account
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                 {saveAccount}
              </Typography>
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
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                {amount} SCR
              </Typography>
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
              Plan ID :
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                {plan_id}
              </Typography>
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
              Maximum Loan Limit :
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "20px 5px",
                  }}
                  fontFamily={"Inter"}
                >
                {maxLoan} SCR
              </Typography>
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
              Requesting Amount :
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handleRequestingAmountChange} />
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
              Period (in months):
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box padding={"20px 0px"}>
              <TextInput onValueChange={handlePeriodChange} />
            </Box>
          </Grid>
          

          <Box
          sx={{
            padding: "20px",
            borderRadius: "20px",
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          
          <YellowButton text="Proceed" onClick={handleLoan}/>
        </Box>
        </Grid>
      </Box>
      
    </Dialog>
  )
}

OnlineLoanRequestPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
