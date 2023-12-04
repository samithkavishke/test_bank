import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Dialog, Typography } from "@mui/material"
function createData(Account, Amount,  DueDate ) {
  return {Account, Amount, DueDate };
}

const rows = [
  createData('wewreee', 159, 6.0, 24),
  createData('wetyr', 237, 9.0, 37),
  createData('asdfdh', 262, 16.0, 24),
  createData('rfgbc', 305, 3.7, 67),
  createData('drewrtgh', 356, 16.0, 49),
];

const LateLoanInstalementsPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'black', border: '2px solid white' }}>
      <Box textAlign="left" sx={{ padding: "20px 150px", textAlign: "center" }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Late Loan Instalements
          </Typography>
      </Box>
      
      <Table sx={{ minWidth: 500 ,color: "#FFCF43", border: '1px solid white'}} >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', border: '1px solid white'}}>Account </TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>Amount</TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>DueDate&nbsp;</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" sx={{ color: 'white', border: '1px solid white' }}>
                {row.Account}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.Amount}</TableCell>
              <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>{row.DueDate}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Dialog>
  )
}

export default LateLoanInstalementsPopup