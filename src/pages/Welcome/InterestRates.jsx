import React from "react"
import { Stack, Box, Typography, List, ListItem } from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

const InterestRates = () => {
  return (
    <Box padding={"20px"}
          id = "interestrates"
          >
      <Typography fontSize={"40px"}>Interest Rates</Typography>
      <Stack
        display="flex"
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        direction={"row"}
        spacing={"20px"}
      >
        <Box
          style={{
            border: "1px solid #FFFFFF",
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically
            fontSize: "60px",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <Typography fontSize="30px" fontWeight={"SemiBold"} padding={"20px"}>
            Saving Accounts
          </Typography>
          <List>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                Children
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                Teen
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                Adult
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                Senior
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          style={{
            border: "1px solid #FFFFFF",
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically
            fontSize: "60px",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <Typography fontSize="30px" fontWeight={"SemiBold"} padding={"20px"}>
            Fixed Deposit Accounts
          </Typography>
          <List>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                6 Months
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                12 Months
              </Typography>
            </ListItem>
            <ListItem>
              <FiberManualRecordIcon fontSize="small" sx={{ marginRight: 2 }} />
              <Typography style={{ fontSize: "20px" }} fontWeight={"300"}>
                24 Months
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  )
}

export default InterestRates
