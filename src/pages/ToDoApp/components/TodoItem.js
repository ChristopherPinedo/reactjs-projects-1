import React, { useState, useEffect } from 'react'

import { Box, IconButton, Paper, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { todo } from '../assets/todo';

const TodoItem = ({title, description, completed, index}) => {

  const [ check, setCheck ] = useState(completed);

  const handleCheck = () => {
    setCheck(!check);
    // todo[index].completed = check;
    console.log(check);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}>
      <Box sx= {{flexGrow: 1}}>
        <IconButton
          position="relative"
          onClick={handleCheck} >
          <CheckCircleIcon fontSize="large" color={check ? "success" : "disabled"} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 11,
          flexDirection: "column"
        }}>
        <Typography variant='h6'> {title} </Typography>
        <Typography variant='p'> {description} </Typography>
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          right: "-1rem",
          top: "-1rem",
          }} >
        <CancelIcon fontSize="large" color="error" />
      </IconButton>
    </Paper>
  )
}

export { TodoItem }