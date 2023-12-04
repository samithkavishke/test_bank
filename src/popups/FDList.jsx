import React from "react"
import { Box, Dialog, Typography ,Grid} from "@mui/material"
import {Button} from "@mui/material";
import { AccountContext } from "../context/AccountContext"
import { FDContext } from "../context/FDContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ButtonBase from "@mui/material";
import { useContext } from "react"
import OnlineLoanRequestPopup from "./OnlineLoanRequest";

const FDListPopup
 = (props) => {

  const [formOpen, setFormOpen] = React.useState(false)
  const {FD , saveAccount,amount,plan_id,setCustomerFD} = useContext(FDContext)
  const { onClose, open, list } = props
  const handleFormOpen = () => {
    setFormOpen(true)
  }
  const handleFormClose = () => {
    setFormOpen(false)
  }
  const handleClose = () => {
    onClose(true)
  }
  const consoleLogFDs=()=>{
    console.log(list)
  }
  const handleButtonClick = (goToFD) => () => {

    //onClose(true)
    console.log(goToFD)
    setCustomerFD(goToFD)
    console.log(FD)
    handleFormOpen()

    //handleAccountDetails(goToAccount) 
  }
  
  return (
    <Dialog open={open} onClose={handleClose}>
     
      {/* <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography
                sx={{
                  color: "yellow",
                  fontSize: 16,
                  fontWeight: 400,
                  padding: "25px 25px",
                }}
                fontFamily={"Inter"}
              >
                  My Fixed Deposits
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={3}>Starting Date</Grid>
                <Grid item xs={3}>Amount</Grid>
                <Grid item xs={3}>Plan ID</Grid>
                <Grid item xs={3}>saving account</Grid>
                </Grid>
                
                {list.map((item, index) => (
                <Grid container spacing={2} key={index}>
                  <Button key={index} onClick={consoleLogFDs} >
                    <Grid item xs={3}>{item.starting_date}</Grid>
                    <Grid item xs={3}>{item.amount}</Grid>
                    <Grid item xs={3}>{item.plan_id}</Grid>
                    <Grid item xs={3}>{item.saving_account}</Grid>
                  </Button>
                  </Grid>
                )
                )}
               
             
             
      </Box> */}
      <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Starting Date</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Plan ID</TableCell>
        <TableCell>Saving Account</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
    
      {list.map((item, index) => (
        
        <TableRow key={index} onClick={()=>handleButtonClick(item)()} style={{ cursor: 'pointer' }}>
          <TableCell>{item.starting_date}</TableCell>
          <TableCell>{item.amount}</TableCell>
          <TableCell>{item.plan_id}</TableCell>
          <TableCell>{item.saving_account_number}</TableCell>
        </TableRow>
        
      ))}
      
    </TableBody>
  </Table>
</TableContainer>
<OnlineLoanRequestPopup open={formOpen} onClose={handleFormClose} />
    </Dialog>
  )
}

export default FDListPopup

