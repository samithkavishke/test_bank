import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
import TextInput from "../../components/TextInput"
import YellowButton from "../../components/YellowButton"
import GreyBox from "../../components/GreyBox"
import AccountListPopup from "../../popups/AccountListPopup"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import api from "../../apiConfig"
import { AccountContext } from "../../context/AccountContext"
import SuccessfulPopup from "../../popups/Successful"

const SavingAccount = () => {

  const {account, setCustomerAccount} = useContext(AccountContext)
  const [accountList, setAccountList] = React.useState([])
  const[accountListPopupOpen, setAccountListPopupOpen] = React.useState(false)
  const { user, username,userType, login, logout } = useContext(AuthContext)
  const [balance , setBalance] = React.useState(0)
  const [withdrawalsLeft , setWithdrawalsLeft] = React.useState(0)
  const [accountType , setAccountType] = React.useState("Your account type")
  const [toAccount , setToAccount] = React.useState("")
  const [amount , setAmount] = React.useState("")
  const [outPutMessage , setOutPutMessage] = React.useState("")
  const [successfulPopupOpen, setSuccessfulPopupOpen] = React.useState(false)
 
  function createData(Date,FromAccount, ToAccount,  Amount ) {
    return {Date,FromAccount, ToAccount,  Amount };
  }
  const handleSuccessfulPopupOpen = (message) => {
    setOutPutMessage(message)
    setSuccessfulPopupOpen(true)
  }
  const handleSuccessfulPopupClose = () => {
    setSuccessfulPopupOpen(false)
  }
  const handleListOpen=()=>{
    setAccountListPopupOpen(true)
    handleAccountList()
  }
  const handleListClose =()=>{
    setAccountListPopupOpen(false)
  }
  const handleToAccountChange = (newToAccount) => {
    setToAccount(newToAccount)
  }
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount)
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
      type: 'savings'}
    api
      .post("/account/account_list", data) // Replace "/api/login" with your actual API endpoint
      .then((response) => {
        if (response.data.approved){
        console.log("List fetched!", response.data)
        setAccountList(response.data.account)
        }
        else{
          console.log("something went wrong!", response.data)
        }
      })
      .catch((error) => {
        console.error("account list fetching failed:", error)
      })}

  React.useEffect(() => {
    console.log(account)
    api
      .post("/account/saving_account_details",{
        account_number: account}) 
      .then((response) => {
        if (response.data.approved){
        console.log("Account details fetched!", response.data)
        setBalance(response.data.account.balance)
        setWithdrawalsLeft(response.data.account.number_of_withdrawals)
        setAccountType(response.data.account.name)
        }
        else{console.log("something went wrong!", response.data)}})
      .catch((error) => {
        // Handle errors
        console.error("account details fetching failed:", error)
      })
    }, [account])
  
  return (
    <Stack direction="row" spacing={20}>
      <Stack spacing={0}>
        <AccountListPopup open ={accountListPopupOpen} onClose={handleListClose} list ={accountList}/>
        <SuccessfulPopup open ={successfulPopupOpen} onClose={handleSuccessfulPopupClose} value={outPutMessage}/>
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
              padding: "0px 5px",
            }}
          >
            Savings Accounts
          </Typography>
          <Box sx={{ padding: "10px 5px", borderRadius: "20px" }}>
              <YellowButton text="Select your saving account" onClick={handleListOpen}/>
            </Box>
            <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
           Account Number : {account}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
              fontWeight: 400,
              padding: "10px 0px",
            }}
            fontFamily={"Inter"}
          >
          Account Type : {accountType}
          </Typography>
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
                Balance
              </Typography>
              <GreyBox>
                <Typography>{balance}</Typography>
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
                No: of Withdrawals Left
              </Typography>
              <GreyBox>
                <Typography>{withdrawalsLeft}</Typography>
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
    <TableComponent/> */}
      </Stack>
    </Stack>
  )
}

export default SavingAccount
