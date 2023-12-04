import React from "react"
import { Stack, Box, Typography, Button } from "@mui/material"
import LoginPopup from "../../popups/Login"
import RegisterPopup from "../../popups/Register"



const NewsBar = () => {
  const [open, setOpen] = React.useState(false)
  const [openRegister, setOpenRegister] = React.useState(false)
  const loginPopupOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const registerPopupOpen = () => {
    setOpenRegister(true)
  }
  const handleRegisterClose = () => {
    setOpenRegister(false)
  }
  return (
    <div
      class="image"
      style={{
        height: "550px",
        width: "100%",
        backgroundImage: 'url("assets/images/welcome_image.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={"100px"} justifyContent="center">
        <Stack direction="column" spacing={"0px"} textAlign="left">
          <Typography fontSize={"72px"} sx={{ lineHeight: "72px", fontWeight: 600 }}>Your</Typography>
          <Typography fontSize={"72px"} sx={{ lineHeight: "72px", fontWeight: 600 }}>Financial Future</Typography>
          <Typography fontSize={"72px"} sx={{ lineHeight: "72px", fontWeight: 600 }}>Starts Here</Typography>
          <Box width={"500px"}>
            <Typography fontSize={"15px"}>
              Welcome to NexusTrust Bank, where your financial future starts.
              Explore our comprehensive services, expert guidance, and
              innovative solutions for a journey towards financial
              prosperity and security.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="column" spacing={"20px"} paddingTop={"100px"} alignItems={"center"}>
          <Button
            onClick={registerPopupOpen}
            variant="contained"
            sx={{
              width: "300px",
              height: "50px",
              fontFamily: "Inter",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#FFCF43",
              color: "black",
              "&:hover": {
                backgroundColor: "#DDCC40", // Specify the hover color
              },
              borderRadius: "10px", // Add this to round the button edges
            }}
          >
            Start My Financial Future
          </Button>
          <Button
            onClick={loginPopupOpen}
            variant="contained"
            style={{border: "1px solid black"}}
            sx={{
              width: "300px",
              height: "50px",
              fontFamily: "Inter",
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#D9D9D9",
              color: "black",
              "&:hover": {
                backgroundColor: "grey", // Specify the hover color
              },
              borderRadius: "10px", // Add this to round the button edges
            }}
          >
            I Already Started
          </Button>
        </Stack>
      </Stack>
      <LoginPopup open={open} onClose={handleClose} />
      <RegisterPopup open={openRegister} onClose={handleRegisterClose} />
    </div>
  )
}

export default NewsBar
