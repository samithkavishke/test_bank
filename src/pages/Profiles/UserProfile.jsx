import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton"; // Make sure to import the YellowButton component
import GreyBox from "../../components/GreyBox";
import Grid from "@mui/material/Grid";
import{useContext} from "react"
import { AuthContext } from "../../context/AuthContext";
import api from "../../apiConfig";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom"


const UserProfile = () => {
  const userID = "123456789";
  const userName = "ABC";
  const userAge = "22";
  const userTelephone = "+234 123 456 789";
  const accountNo = "123456789";
  const plan = "Saving Account";
  const bracnh = "Marine Province";
  const { user, username,userType, login, logout } = useContext(AuthContext)
  const [fullname, setFullname] = React.useState("")
  const [dateOfBirth, setDateOfBirth ] = React.useState("")
  const [telephone, setTelephone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [anchorElProfileMenu, setAnchorElProfileMenu] = React.useState(null)
  
  const navigate = useNavigate()
  const cookies = new Cookies();
  const handleLogout = () => {
    logout()
    setAnchorElProfileMenu(null)
    cookies.remove("user", { path: "/" });
    navigate("/")
  }
  const handleFullNameChange = (newFullName) => {
    setFullname(newFullName)
  }
  const handleBirthDateChange = (newDateOfBirth) => {
    const date = new Date(newDateOfBirth);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setDateOfBirth(formattedDate)
  }
  const handleTelephoneChange = (newTelephone) => {
    setTelephone(newTelephone)
  }
  React.useEffect(() => {
    console.log(user)
    api
      .post("/customer/get_customer",{
        NIC: user}) 
      .then((response) => {
        if (response.data.approved){
        console.log("User details fetched!", response.data)
        handleFullNameChange(response.data.user.name)
        handleBirthDateChange(response.data.user.date_of_birth)
        handleTelephoneChange(response.data.user.telephone_number)
        setEmail(response.data.user.email)

        
        }
        else{console.log("something went wrong!", response.data)}})
      .catch((error) => {
        // Handle errors
        console.error("account details fetching failed:", error)
      })
    }, [user])
  
  

  return (
    <Stack
  direction="column"
  spacing={4}
  sx={{
    backgroundColor: "black",
    padding: "20px",
    height: "100%",
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
  }}
>
      <Stack direction="row" spacing={4}>
        <Stack spacing={0}>
          <Box textAlign="left">
            <Typography
              sx={{
                color: "#FFCF43",
                fontSize: 24,
                fontWeight: 700,
                mb:2,
              }}
            >
              My Profile
            </Typography>
          </Box>
          <Box>
          <img src="assets/images/ProfilePicture.png" alt="User Icon" /> 
          </Box>
          <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
            <YellowButton text="Logout" onClick={handleLogout} /> 
          </Box>
        </Stack>
        <Stack spacing={0} sx={{ justifyContent: "flex-end" }}>
          <Box textAlign="left" sx={{ padding: "20px 150px" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: 24,
                fontWeight: 700,
                mb: 2, // 1 unit is equivalent to 8 pixels, so this creates a 8px margin below the element
              }}
            >
              My Profile Details
            </Typography>

             <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
             NIC number :  {user}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
            Full Name:  {fullname}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
              Date of Birth: {dateOfBirth}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
                mb:2,
              }}
              fontFamily={"Inter"}
            >
              Telephone No: {telephone}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
                mb:2,
              }}
              fontFamily={"Inter"}
            >
              email:  {email}
            </Typography>
           
          </Box>  
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserProfile;