import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Dialog, Typography } from "@mui/material"
function createData(From, To, Amount, Date,Time ) {
  return {From, To, Amount, Date, Time};
}

const rows = [
  createData('wewreee', 159, 6.0, 24, 4.0),
  createData('wetyr', 237, 9.0, 37, 4.3),
  createData('asdfdh', 262, 16.0, 24, 6.0),
  createData('rfgbc', 305, 3.7, 67, 4.3),
  createData('drewrtgh', 356, 16.0, 49, 3.9),
];

const TotalTransactionReportPopup = (props) => {
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
            Total Transaction Report
          </Typography>
      </Box>
      
      <Table sx={{ minWidth: 500 ,color: "#FFCF43", border: '1px solid white'}} >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', border: '1px solid white'}}>From </TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>To</TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>Amount&nbsp;</TableCell>
            <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>Date&nbsp;</TableCell>
            <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>Time&nbsp;</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" sx={{ color: 'white', border: '1px solid white' }}>
                {row.From}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.To}</TableCell>
              <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>{row.Amount}</TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.Date}</TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.Time}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Dialog>
  )
}

export default TotalTransactionReportPopup