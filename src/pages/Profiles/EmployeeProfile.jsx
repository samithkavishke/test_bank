import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton"; // Make sure to import the YellowButton component
import GreyBox from "../../components/GreyBox";
import Grid from "@mui/material/Grid";

const EmployeeProfile = () => {
  const userID = "123456789";
  const userName = "ABC";
  const userAge = "22";
  const userTelephone = "+234 123 456 789";

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
              Employee Portal
            </Typography>
          </Box>
          <Box>
          <img src="assets/images/ProfilePicture.png" alt="User Icon" /> 
          </Box>
          <Box sx={{ padding: "10px 0px", borderRadius: "20px" }}>
            <YellowButton text="Logout" /> 
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
              My Details
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
              ID: {userID}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
              Name: {userName}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
              Age: {userAge}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 400,
              }}
              fontFamily={"Inter"}
            >
              Telephone No: {userTelephone}
            </Typography>
          </Box>
          
        </Stack>
      </Stack>
  <Stack direction="column" alignItems="left" spacing={4} sx={{ width: "25%", padding: "20px" }}>
      <YellowButton text="Submit a Loan Request" />
      <YellowButton text="Register New Customer" />
    </Stack>
    </Stack>
  );
};

export default EmployeeProfile;