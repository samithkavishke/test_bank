import { Typography, Stack, Box } from "@mui/material"
import React from "react"

const AboutUs = () => {
  return (
    <Box
      id = "aboutus"
      paddingTop={"20px"}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography fontSize={"40px"}>About Us</Typography>
      <Box padding={"20px"}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            width={"500px"}
            fontSize={"20px"}
            fontStyle={"justify"}
            style={{ textAlign: "justify" }}
            padding={"20px"}
          >
            Discover unparalleled convenience with our sleek online banking
            platform. Seamlessly manage your finances through an intuitive
            interface, offering swift access to balances, transfers, bill
            payments, and more. Our cutting-edge security ensures your data
            remains protected, while interactive tools assist in budgeting and
            goal tracking. Experience the future of banking at your fingertips,
            complete with attentive customer support. Embrace efficient, secure,
            and user-friendly banking on our website today.
          </Typography>
          <img
            src="assets/images/about_us.png"
            alt="mission"
            style={{ height: "400px", width: "400px" }}
          />
        </Stack>
      </Box>
      <Box
        style={{
          border: "1px solid #FFFFFF",
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center vertically
          fontSize: "72px",
          flexDirection: "column",
        }}
      >
        <Typography color={"#FFCF43"} fontSize={"20px"} fontStyle={"italic"}>
          "Cultivating Prosperity, One Account at a Time,
        </Typography>
        <Typography color={"#FFCF43"} fontSize={"20px"} fontStyle={"italic"}>
          Where Your Financial Journey Becomes Our Shared Adventure."
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutUs
