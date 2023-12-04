import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const DigitalBankingPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.3,
          padding: 0, // Set the background color to black
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
        <Typography
                sx={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: "25px 12.5px",
                  textAlign: "center"
                }}
                fontFamily={"Inter"}
              >
                  Welcome to Digital Banking!
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 13,
                  fontWeight: 400,
                  padding: "12.5px 25px",
                  textAlign: "Justify"
                }}
                fontFamily={"Inter"}
              >
                At Nexus Trust Bank, we're excited to introduce you to the future of banking - our Digital Banking platform. In a rapidly evolving world, we understand the need for financial services that are not only secure and efficient but also tailored to your lifestyle. With Digital Banking, you have the power to manage your finances anytime, anywhere, with just a few clicks or taps.
                <br/><br/>Our Digital Banking platform is designed with your convenience in mind. Whether you're on your computer, tablet, or smartphone, you can access your accounts, conduct transactions, and explore a wide range of financial services with ease. Say goodbye to long queues and fixed banking hours, and say hello to banking on your terms.<br/>
              </Typography>
      </Box>
    </Dialog>
  )
}

export default DigitalBankingPopup