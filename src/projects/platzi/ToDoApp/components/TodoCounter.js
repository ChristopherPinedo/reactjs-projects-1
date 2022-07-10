import React from 'react';
import { Stack, Typography } from '@mui/material';

const TodoCounter = ({totalTodos, completedTodos}) => {
  return (
    <Stack
    direction="column"
    spacing= {1}
    alignItems="center"
    >
      <Typography variant="h4">To do App</Typography>
      <Typography variant="h6"> Completadas {completedTodos} de {totalTodos} </Typography>
    </Stack>
  )
}

export { TodoCounter }