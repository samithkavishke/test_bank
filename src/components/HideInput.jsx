import React from 'react'
import {  OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const HideInput = ({ onValueChange}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [value, setValue] = React.useState("")
    const handleChange = (event) => {
      const newValue = event.target.value;
      setValue(newValue);
  
      // Call the callback function to update the username in the parent component
      onValueChange(newValue);
    };
  return (

    <OutlinedInput
      onChange={handleChange}
      id="standard-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      sx={{
        borderRadius: "50px",
        backgroundColor: "white",
        "& fieldset": { border: "none" },
        "& input": {
          paddingTop: "6px",
          paddingBottom: "6px",
        },
        width:"210px",
      }}
    />

  )
}

export default HideInput
