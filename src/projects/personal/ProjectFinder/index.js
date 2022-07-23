import React from 'react';

import { Divider, Stack } from '@mui/material';

import ProjectHeader from './components/ProjectHeader';
import ProjectCard from './components/ProjectCard';

function ProjectFinder() {

  const tecnologias = {};
  const Concept = {}

  return (
    <Stack
    spacing={4}
    divider={<Divider variant="middle" flexItem/>}
    sx={{
      minHeight: 1,
      p: 4
    }}>
      <ProjectHeader />
      <ProjectCard />
    </Stack>
  )
}

export default ProjectFinder