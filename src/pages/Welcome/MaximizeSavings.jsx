import React from "react"
import { Stack, Typography, Box } from "@mui/material"

const MaximizeSavings = () => {
  return (
    <Box
      paddingTop={"20px"}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack direction="row" spacing={"2px"}>
        <img
          src="assets/images/interest.png"
          alt="mission"
          style={{ height: "400px", width: "600px" }}
        />
        <Box width={"500px"} paddingLeft={"20px"}>
          <Typography
            fontSize={"36px"}
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            Maximize Your Savings With NexusTrust Bank's High-Interest Rates
          </Typography>
          <Typography
            fontSize={"20px"}
            fontStyle={"justify"}
            style={{ textAlign: "justify" }}
          >
            Explore NexusTrust Bank's dedicated section for the highest interest
            rates, where you can discover a range of savings and investment
            options designed to help your money grow. Whether you're saving for
            the future or planning for a major purchase, our competitive
            interest rates will help you reach your financial goals faster.
            Learn more about our offerings and start earning more with
            NexusTrust Bank today.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default MaximizeSavings
