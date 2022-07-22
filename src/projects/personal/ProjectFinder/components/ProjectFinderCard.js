import React from 'react'

import { Button, Card, CardContent, IconButton, Stack, Typography } from '@mui/material'

import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProjectFinderCard = () => {
  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant="h5" component="div" >Lorem Ipsum</Typography>
          <Typography variant="p" component="p" >Lorem Ipsum dolor sit amet</Typography>
        </Stack>
      </CardContent>
      <Stack
      p={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
        <Stack
        direction="row"
        spacing={1}
        >
          <IconButton size="small">
            <FavoriteIcon />
          </IconButton>
          <IconButton size="small">
            <ShareIcon />
          </IconButton>
          <IconButton size="small">
            <GitHubIcon />
          </IconButton>
        </Stack>
        <Stack
        direction="row"
        >
          <Button size="small">Visitar</Button>
        </Stack>
      </Stack>
    </Card>
  )
}

export default ProjectFinderCard