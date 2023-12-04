import React, { useState } from "react"
import NavBar from "../../components/NavBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import SavingAccount from "./SavingAccount"
import CheckingAccount from "./CheckingAccount"
import Footer from "../../components/Footer"
import Loans from "./LoansFD"


const Account = () => {
  const [selectedAccount, setSelectedAccount] = useState("SavingAccount")

  const handleButtonClick = (accountType) => {
    setSelectedAccount(accountType)
  }

  return (
    <Box
      style={{
        backgroundColor: "black", // Set the background color to black
        minHeight: "100vh", // Ensure the background color covers the entire viewport height
      }}
    >
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white" }}
          onClick={() => handleButtonClick("SavingAccount")}
          
        >
          Saving Account
        </Button>
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white" }}
          onClick={() => handleButtonClick("CheckingAccount")}
        >
          Checking Account
        </Button>
        <Button
          sx={{ textTransform: "none", padding: "10px 20px", color: "white"}}
          onClick={() => handleButtonClick("FixedDepositsAndLoans")}
        >
          Fixed Deposits and Loans
        </Button>
        {/* Add buttons for other account types here */}
      </Stack>
      <Box mt={2} paddingBottom={"20px"}>
        {selectedAccount === "SavingAccount" && <SavingAccount />}
        {selectedAccount === "CheckingAccount" && <CheckingAccount />}
        {selectedAccount == "FixedDepositsAndLoans" && <Loans/>}
        {/* Add conditions for other account types' details here */}
      </Box>
      <Footer/>
    </Box>
  )
}

export default Account
