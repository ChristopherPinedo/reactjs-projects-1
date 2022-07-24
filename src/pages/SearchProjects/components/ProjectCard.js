import React from 'react'

import { Button, Card, CardContent, Chip, Divider, IconButton, Link, Paper, Stack, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom';

import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProjectCard = ({ title, description, route, ghRoute, technologies, concepts }) => {
  return (
    <Paper elevation={2}>
      <Stack
      p={2}
      spacing={2}
      divider={<Divider flexItem/>}
      >
        <Stack spacing={2} divider={<Divider flexItem/>} >
          <div>
            <Typography variant="h5" component="h5" gutterBottom> {title} </Typography>
            <Typography variant="p" component="p" > {description} </Typography>
          </div>
          <Stack spacing={2}>
            <Paper variant="outlined" sx={{p:1}} >
              <Typography variant="p" component="p" gutterBottom >Tencologias</Typography>
              <Stack spacing={1} direction="row">
                {technologies && technologies.map((ele, i) => {
                  return (
                    <Chip key={i} label={ele} />
                  )
                })}
              </Stack>
            </Paper>
            <Paper variant="outlined" sx={{p:1}} >
              <Typography variant="p" component="p" gutterBottom >Conceptos</Typography>
              <Stack spacing={1} direction="row">
                {concepts && concepts.map((ele, i) => {
                  return (
                    <Chip key={i} label={ele} />
                  )
                })}
              </Stack>
            </Paper>
          </Stack>
        </Stack>
        <Stack
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
      </Stack>

    </Paper>
  )
}

export default ProjectCard