import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton"; // Make sure to import the YellowButton component
import GreyBox from "../../components/GreyBox";
import Grid from "@mui/material/Grid";

const ManagerProfile = () => {
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
              Manager Portal
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
      <Stack direction="column" spacing={4} >
      <Typography
  sx={{
    color: "#FFCF43",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "left",
  }}
>
  Loans to approve
</Typography>
<Grid container spacing={2}>
  <Grid item xs={6}>
    <GreyBox sx={{ width: "50%", height: "100px", padding: "10px 10px 10px 50px" }}>
      <Stack direction="column" alignItems="flex-start" spacing={4} sx={{ width: "100%" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          Account Number : 123456789
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          Amount : $500.00
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          Time Period(in months) : 12
        </Typography>
        <Stack direction="row" alignItems="flex-start" spacing={4} sx={{ width: "100%" }}>
          <YellowButton text="Approve" />
          <YellowButton text="Disapprove" />
        </Stack>
      </Stack>
    </GreyBox>
  </Grid>
  <Grid item xs={6}>
  <Stack direction="column" alignItems="left" spacing={4} sx={{ width: "100%", padding: "20px" }}>
      <YellowButton text="Total Transaction Report" />
      <YellowButton text="Late Loan Installments" />
    </Stack>
  </Grid>
</Grid>
    </Stack>
    </Stack>
  );
};

export default ManagerProfile;