import React from 'react';

import { Divider, Stack } from '@mui/material';

import ProjectHeader from './components/ProjectHeader';
import ProjectCard from './components/ProjectCard';

import { projectsData } from '../../datos/projectsData';

function SearchProjects() {

  const cardData = projectsData.projects();

  return (
    <Stack
    spacing={4}
    divider={<Divider variant="middle" flexItem/>}
    sx={{
      minHeight: 1,
      p: 4
    }}>
      <ProjectHeader />
      <Stack spacing={2}>
        {
          cardData && cardData.map((ele, i) => {
            return(
              <ProjectCard
                key={i}
                title={ele.title}
                description={ele.description}
                route={ele.route}
                ghRoute={ele.ghRoute}
              />
            )
          })
        }
      </Stack>
    </Stack>
  )
}

export default SearchProjects