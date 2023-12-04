import React from "react"
import { Box, Dialog, Typography } from "@mui/material"

const AboutUsPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "black",
          margin: 0.1,
          padding: 0, 
          boxShadow: "none", // Remove the shadow
        }}
        alignItems={"center"}
        flex={"row"}
      >
         <Typography>
               
         </Typography>
             
      </Box>
    </Dialog>
  )
}

export default AboutUsPopup
