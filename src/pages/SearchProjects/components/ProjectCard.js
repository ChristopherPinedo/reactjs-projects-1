import React from 'react'

import { Button, Card, CardContent, IconButton, Link, Stack, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom';

import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProjectCard = ({ title, description, route, ghRoute }) => {
  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant="h5" component="div" gutterBottom> {title} </Typography>
          <Typography variant="p" component="p" > {description} </Typography>
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
          {/* <IconButton size="small">
            <FavoriteIcon />
          </IconButton>
          <IconButton size="small">
            <ShareIcon />
          </IconButton> */}
          <IconButton
          size="small"
          component={Link}
          href={ghRoute}
          target="_blank"
          rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
        <Stack
        direction="row"
        >
          <Button
          variant="contained"
          size="small"
          component={RouterLink}
          to={route}
          >
            Visitar
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}

export default ProjectCard