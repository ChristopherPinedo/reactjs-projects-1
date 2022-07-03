import React from 'react';
import { Stack, Typography } from '@mui/material';
import { todo } from '../assets/todo'

const completedTodos = (obj) => {
  let counter = 0
  obj.map( item => item.completed && counter++)
  return counter
}

const TodoCounter = (props) => {
  return (
    <Stack
    direction="column"
    spacing= {1}
    alignItems="center"
    >
      <Typography variant="h4">To-Do App</Typography>
      <Typography variant="h6"> Completadas {completedTodos(todo)} de {todo.length} </Typography>
    </Stack>
  )
}

export { TodoCounter }