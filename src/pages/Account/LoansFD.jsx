import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
import TextInput from "../../components/TextInput"
import YellowButton from "../../components/YellowButton"
import GreyBox from "../../components/GreyBox"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { FDContext } from "../../context/FDContext"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FDListPopup from "../../popups/FDList"
import api from "../../apiConfig"
const Loans = () => {
  const[fdPopupOpen,setFdPopupOpen ] = React.useState(false)
  const [FDList ,setFDList] = React.useState([])
  const accountType = "Adult"
  
  const { user, username,userType, login, logout } = useContext(AuthContext)
  const handleFdListOpen=()=>{
    setFdPopupOpen(true)
    handleFdList()
    console.log(FDList)
  }
  const handleFdListClose=()=>{
    setFdPopupOpen(false)
  }

  const handleFdList=()=>{
    const data ={
      NIC : user
    }
    api
      .post("/FD/my_fd_list", data) 
      .then((response) => {
        
        if (response.data.approved){
          let fd_list  = response.data.FDs
          if (!Array.isArray(fd_list)){
            fd_list = [fd_list]
          }
            
        setFDList(fd_list)
        console.log(fd_list)
        console.log("Fd s fetched!")
        
        }
        else{
          console.log("something went wrong!", response.data) }})
      .catch((error) => {
        console.error("FD details fetching failed:", error)
      })
  }
  return (
    <Stack direction="row" spacing={20} >
      <Stack spacing={0}>
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
            Fixed Deposits & Loans
          </Typography>
          <Stack padding={{ paddingTop: "10px" }} direction="column" spacing={2}>
            <Box>
           
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
                My Fixed Deposits
              </Typography>
              <GreyBox>
                  <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
                                 1 year   -14%      $30,000.00
                 </Typography>
                   <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
                              6 months   -13%    $30,000.00
                 </Typography>
                 <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
                              3 months   -12%    $30,000.00
                 </Typography>
              </GreyBox>
            </Box>
          </Stack>
          <Stack padding={{ paddingTop: "20px" }} direction="row" spacing={3}>
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
                Fixed Deposits Plans
              </Typography>
              <GreyBox>

              
                <GreyBox>
                 <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
                 1 year   -14%      $30,000.00
                 </Typography>
              <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
               6 months   -13%    $30,000.00
              </Typography>
            <Typography fontFamily="Inter" style={{ textAlign: "left" }}>
                  3 months   -12%    $30,000.00
            </Typography>
          </GreyBox>

              </GreyBox>
            </Box>
          </Stack>

        </Box>
        
        
      </Stack>

      
       
        <Stack spacing={0}>
        <stack>
          
        <Typography
          fontFamily={"Inter"}
          color={"white"}
          padding={{ paddingBottom: "10px" }}
        >

          My Loans
        </Typography>
        <GreyBox>
          <Typography fontFamily={"Inter"}>Loan 1</Typography>
          <Typography fontFamily={"Inter"}>Loan 2</Typography>
          <Typography fontFamily={"Inter"}>Loan 3</Typography>
        </GreyBox>
        <Box>
        <GreyBox>
        <Typography
          fontFamily={"Inter"}
          color={"white"}
          padding={{ paddingBottom: "20px" }}
        >

          Online Loan Request
        </Typography>
        <Button
                onClick={handleFdListOpen}
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundColor: "#FFCF43",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "yellow", // Specify the hover color
                  },
                  borderRadius: "20px", // Add this to round the button edges
                }}
              >
                Select FD
              </Button>
        <FDListPopup open ={fdPopupOpen} onClose ={handleFdListClose} list={FDList} />
        </GreyBox>
        </Box>
        </stack>

        
        <Box sx={{ paddingLeft: "50px" }}>
         
        </Box>
        
        
        
      </Stack>
      </Stack>
  );
    
}

export default Loans
