import React from 'react'
import { TextField } from '@mui/material'

const TextInput = ({ value,onValueChange,isPassword = false}) => {
  const [inputValue, setValue] = React.useState("")

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Call the callback function to update the username in the parent component
    onValueChange(newValue);
  };
  return (
    <TextField 
    
      value={value}
      variant="outlined"
      type= {isPassword ? "password" : "text"}
      onChange={handleChange}
      sx={{
        borderRadius: "50px",
        backgroundColor: "white",
        "& fieldset": { border: "none" },
        "& input": {
          paddingTop: "6px",
          paddingBottom: "6px",
        },
      }}
    />
  )
}

export default TextInput