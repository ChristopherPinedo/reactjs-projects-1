import React from 'react';

import { Divider, Stack } from '@mui/material';

import ProjectFinderHeader from './components/ProjectFinderHeader';
import ProjectFinderCard from './components/ProjectFinderCard';

function ProjectFinder() {

  const tecnologias = {};
  const Concept = {}

  return (
    <Stack
    spacing={4}
    divider={<Divider flexItem/>}
    sx={{
      minHeight: 1,
      p: 4
    }}>
      <ProjectFinderHeader />
      <ProjectFinderCard />
    </Stack>
  )
}

export default ProjectFinder