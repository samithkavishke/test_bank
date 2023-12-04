import React from "react"
import { Box, Dialog, Typography, Stack } from "@mui/material"

const ContactUsPopup = (props) => {
  const { onClose, open,name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: "50px 50px", // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Stack spacing={2} textAlign="left">
            <Typography color="white" fontSize="30px" fontWeight="bold" textAlign="center">
              Contact Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <img
                src="assets/images/navbar_call.png"
                alt="mission"
                style={{ height: "20px", width: "20px" }}
              />
              <Typography color="white"> +248 123 456 789</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <img
                src="assets/images/navbar_mail.png"
                alt="mission"
                style={{ height: "20px", width: "20px" }}
              />
              <Typography color="white"> contact@nexustrustbank.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <img
                src="assets/images/navbar_location.png"
                alt="mission"
                style={{ height: "20px", width: "20px" }}
              />
              <Typography color="white" width={"240px"}>
                123 Ocean Avenue,Coral Bay, Seaside City, Marine Province, Zip
                Code: 56789
              </Typography>
            </Stack>
          </Stack>
      </Box>
    </Dialog>
  )
}

export default ContactUsPopup
