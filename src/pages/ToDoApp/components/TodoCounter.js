import { Typography } from '@mui/material'
import React from 'react'

const TodoCounter = (props) => {
  return (
    <div>
      <Typography variant="h4">To-Do App</Typography>
      <Typography variant="h6"> Completadas 3 de 5 </Typography>
    </div>
  )
}

export { TodoCounter }