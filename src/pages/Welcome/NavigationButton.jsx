import React from "react"
import { Button, Stack } from "@mui/material"

const NavigationButton = ({ src, title,onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{
        color: "white",
        height: "300px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid black",
        "&:hover": {
          backgroundColor: "#EEEEEE", // Specify the hover color
        },
        borderRadius: "20px",
      }}
    >
      <Stack direction={"column"}>
        <img src={`assets/images/${src}.png`} alt={title} />
        <p>{title}</p>
      </Stack>
    </Button>
  )
}

export default NavigationButton
