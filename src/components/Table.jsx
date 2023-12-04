import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
const TableComponent=({tableName,columns,rows})=> {
return(
    <TableContainer component={Paper} sx={{ backgroundColor: 'black', border: '2px solid white', padding: '10px' }}>
      <Box textAlign="left" sx={{ padding: "20px 100px", textAlign: "center", padding: '10px' }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            {tableName}
          </Typography>
      </Box>
      
      <Table sx={{ minWidth: 300 ,color: "#FFCF43", border: '1px solid white', padding: '10px'}} >
        <TableHead>
          <TableRow>
            {columns.map((column,index)=>(
                <TableCell key={index} sx={{ color: 'white', border: '1px solid white', padding: '10px 20px' }}>{column}</TableCell>
            
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row,rowIndex) => (
            <TableRow
              key={rowIndex}>
                {columns.map((column,columnIndex)=>(
                    <TableCell key={columnIndex} sx={{ color: 'white', border: '1px solid white', padding: '10px 20px' }}>
                        {row[column]}</TableCell>
                     ))}
    
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
)
    }

export default TableComponent