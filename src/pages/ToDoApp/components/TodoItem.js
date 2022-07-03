import React, { useState } from 'react'

import { Box, IconButton, Paper, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoItem = ({title, description, completed}) => {

  const [ check, setCheck ] = useState(false);

  const handleCheck = () => setCheck(!check);

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
      <IconButton position="relative"  onClick={handleCheck} >
        <CheckCircleIcon fontSize="large" color={check ? "success" : "disabled"} />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexGrow: 3,
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