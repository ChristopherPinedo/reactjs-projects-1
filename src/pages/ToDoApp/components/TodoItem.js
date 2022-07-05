import React, { useState, useEffect } from 'react'

import { Box, IconButton, Paper, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoItem = ({title, description, completed, todos, setTodos}) => {

  // const [ check, setCheck ] = useState(completed);

  const handleComplete = (text) => {
    // setCheck(!check);
    const todoIndex = todos.findIndex(todo => todo.title === text);
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);

    console.log(`TODO: ${title} completed: ${completed}`)
  };

  const handleDelete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.title === text);
    // const newTodos = [ ...todos ];
    // newTodos.splice(todoIndex, 1);

    const newTodos = todos.filter(todo => todo.title !== text);

    setTodos(newTodos);

    console.log(`Borraste el TODO: ${title}`)
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
          onClick={() => handleComplete(title)} >
          <CheckCircleIcon fontSize="large"
          sx={{
            color: `${completed ? "success.light" : "default"}`
          }} />
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
        onClick={ () => handleDelete(title) }
        sx={{
          position: "absolute",
          right: "-1.2rem",
          top: "-1.2rem",
          }} >
        <CancelIcon fontSize="large" sx={{
          color: "error.light",
          "&:hover": {
            color: "error.dark",
          }
        }} />
      </IconButton>
    </Paper>
  )
}

export { TodoItem }