import { Stack, Typography } from '@mui/material'
import React from 'react'

const PresentationHeader = () => {
  return (
    <Stack>
      <Typography variant="h3" component="h2">
        Christopher Pinedo
      </Typography>
      <Typography variant="h5" component="h3">
        Frontend Developer
      </Typography>
    </Stack>
  )
}

export default PresentationHeader