import React, { useState, useEffect } from 'react'

import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoItem = ({title, description, completed, todos, setTodos}) => {

  // const saveTodos = (newTodos) => {
  //   const stringifiedTodos = JSON.stringify(newTodos)
  //   localStorage.setItem("TODOS_V1", stringifiedTodos)
  //   setTodos(newTodos)
  // };

  const handleComplete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.title === text);
    const newTodos = [ ...todos ];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const handleDelete = (text) => {
    // const todoIndex = todos.findIndex(todo => todo.title === text);
    // const newTodos = [ ...todos ];
    // newTodos.splice(todoIndex, 1);
    const newTodos = todos.filter(todo => todo.title !== text);
    setTodos(newTodos);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        width: "inherit",
        maxWidth: 1,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}>
      <Box sx= {{flexGrow: 1}} >
        <IconButton
          position="relative"
          onClick={() => handleComplete(title)} >
          <CheckCircleIcon fontSize="large"
          sx={{
            color: `${completed ? "success.light" : "default"}`
          }} />
        </IconButton>
      </Box>
      <Stack
      direction="column"
      flexGrow={6}
      >
        <Typography variant='h6' component="h6"> {title} </Typography>
        <Typography variant='p' component="p" sx={{wordWrap: "break-word"}}> {description} </Typography>
      </Stack>
      <IconButton
        onClick={ () => handleDelete(title) }
        sx={{
          position: "absolute",
          right: "-1.2rem",
          top: "-1.2rem",
          // flexGrow: 1
          }} >
        <CancelIcon fontSize="large" sx={{
          color: "error.light",
        }} />
      </IconButton>
    </Paper>
  )
}

export { TodoItem }