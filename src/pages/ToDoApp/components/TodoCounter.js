import { Stack, Typography } from '@mui/material'
import React from 'react'

const TodoCounter = (props) => {
  return (
    <Stack
    direction="column"
    spacing= {1}
    alignItems="center"
    >
      <Typography variant="h4">To-Do App</Typography>
      <Typography variant="h6"> Completadas 3 de 5 </Typography>
    </Stack>
  )
}

export { TodoCounter }