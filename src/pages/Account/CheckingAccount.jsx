import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import TableComponent from "../../components/Table";
import { styled } from "@mui/material/styles"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
import { useContext } from "react"
import { CurrentAccountContext } from "../../context/CurrentAccountContext"
import api from "../../apiConfig"
import YellowButton from "../../components/YellowButton"
import { AuthContext } from "../../context/AuthContext"
import CurrentAccountList from "../../popups/CurrentAccountList"
import SuccessfulPopup from "../../popups/Successful"
import TextInput from "../../components/TextInput"

function createData(Date,FromAccount, ToAccount,  Amount ) {
  return {Date,FromAccount, ToAccount,  Amount };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const GreyBox = styled(Paper)(({ theme }) => ({
  backgroundColor: "#151515", // Set the background color to grey
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "white", // Set the text color to white
  fontWeight: "bold", // Set the font weight to bold
  borderRadius: "20px",
}))

const CheckingAccount = () => {
  // const accountType = "Adult"
 const {account, setCustomerCurrentAccount} = useContext(CurrentAccountContext)
   //const {account, setCustomerAccount} = useContext(AccountContext)
  const { user, username,userType, login, logout } = useContext(AuthContext)
 
  const [balance , setBalance] = React.useState(0)
  
  const [accountList, setAccountList] = React.useState([])
  const[accountListPopupOpen, setAccountListPopupOpen] = React.useState(false)
  const [toAccount , setToAccount] = React.useState("")
  const [amount , setAmount] = React.useState("")
  const [successfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false)
  const [outPutMessage , setOutPutMessage] = React.useState("")
  const handleSuccessfulPopupOpen = (message) => {
    setOutPutMessage(message)
    setSuccessfulPopupOpen(true)
  }
  const handleSuccessfulPopupClose = () => {
    setSuccessfulPopupOpen(false)
  }
  const handleToAccountChange = (newToAccount) => {
    setToAccount(newToAccount)
  }
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount)
  }
  const handleListOpen=()=>{
    setAccountListPopupOpen(true)
    handleAccountList()
  }

  const handleListClose =()=>{
    setAccountListPopupOpen(false)
  }
  const handleTransaction = () => {
    const data = {
      sender_account_number: account,
      receiver_account_number: toAccount,
      transfer_amount: amount
    }
    api
      .post("/transaction/transaction", data) 
      .then((response) => {
        if (response.data.approved){
        console.log("Transfer success!", response.data.message)
        setBalance(response.data.balance)
        handleSuccessfulPopupOpen(response.data.message)
        handleToAccountChange("")
        handleAmountChange("")
        }
        else{
          console.log("something went wrong!", response.data) }})
      .catch((error) => {
        console.error("account details fetching failed:", error)
      })}

  const handleAccountList=() =>{
    console.log(user)
    const data = {
      NIC: user,
      type: 'current'
    }
    api
      .post("/account/account_list", data) // Replace "/api/login" with your actual API endpoint
      .then((response) => {
       
        if (response.data.approved){
        console.log("List fetched!", response.data)
        setAccountList(response.data.account)
        //navigate("/account")
        }
        else{
          console.log("something went wrong!", response.data)
        }
        //onClose(true)
      })
      .catch((error) => {
        // Handle errors
        console.error("account list fetching failed:", error)
      })
  }

  React.useEffect(() => {
    console.log(account)
    api
      .post("/account/account_details",{
        account_number: account
      }) 
      .then((response) => {
        if (response.data.approved){
        console.log("Account details fetched!", response.data)
        setBalance(response.data.account.balance)
        }
        else{
          console.log("something went wrong!", response.data)
        }
})
      .catch((error) => {
        console.error("account details fetching failed:", error)
      })
    }, [account])

  return (
    <Stack direction="row" spacing={20}>
      <Stack spacing={0}>
      <CurrentAccountList open ={accountListPopupOpen} onClose={handleListClose} list ={accountList}/>
      <SuccessfulPopup open ={successfulPopupOpen} onClose={handleSuccessfulPopupClose} value={outPutMessage}/>
      {/* <AccountListPopup open ={accountListPopupOpen} onClose={handleListClose} list ={accountList}/> */}
        <Box textAlign="left" sx={{ padding: "20px 150px" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Dashboard
          </Typography>
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 20,
              fontWeight: 500,
              padding: "0px 0px",
            }}
          >
            Checking Account
          </Typography>
          <Box sx={{ padding: "10px 5px", borderRadius: "20px" }}>
              <YellowButton text="Select your checking account" onClick={handleListOpen}/>
            </Box>
          
          <Stack padding={{ paddingTop: "10px" }} direction="row" spacing={2}>
            
          <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Account Number
              </Typography>
              <GreyBox>
                <Typography>{account}</Typography>
              </GreyBox>
            </Box>
          
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 400,
                  padding: "0px 0px",
                }}
                fontFamily={"Inter"}
              >
                Balance
              </Typography>
              <GreyBox>
                <Typography>{balance} SCR</Typography>
              </GreyBox>
            </Box>
            
          </Stack>
          
      <Box padding={{ paddingTop: "20px" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: 12,
                fontWeight: 400,
                padding: "0px 0px",
              }}
              fontFamily={"Inter"}
            >
              Transaction
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: "100px" }}>
          <GreyBox allignment="left" padding="10px 10px 10px 50px">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  To Account:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextInput value={toAccount} onValueChange={handleToAccountChange} />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 400,
                    padding: "0px 0px",
                  }}
                  fontFamily={"Inter"}
                >
                  Amount:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextInput value={amount} onValueChange={handleAmountChange}/>
              </Grid>
            </Grid>
            <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
              <YellowButton text="Proceed" onClick={handleTransaction} />
            </Box>
          </GreyBox>
        </Box>
        
        
      </Stack>
      
      <Stack spacing={0}>
        
      {/* <TableComponent/>
      <TableComponent/>
   */}

      </Stack>
    </Stack>
  )
}

export default CheckingAccount
