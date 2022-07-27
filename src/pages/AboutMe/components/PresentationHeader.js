import React from 'react'

import { Stack, Typography } from '@mui/material'

import { personalData } from '../../../datos/personalData';

const PresentationHeader = () => {
  return (
    <Stack>
      <Typography variant="h3" component="h2">
        { personalData.fullName }
      </Typography>
      <Typography variant="h5" component="h3">
        { personalData.role }
      </Typography>
    </Stack>
  )
}

export default PresentationHeader