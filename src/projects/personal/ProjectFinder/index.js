import { Stack, Box, Chip, Typography, InputAdornment, TextField, ToggleButtonGroup, ToggleButton, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import React from 'react'

function ProjectFinder() {

  const [openFilter, setOpenFilter] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  const handleChange = (event, newFilter) =>  {
    setFilter(newFilter);
    console.log(newFilter);
  };

  const tecnologias = {};
  const Concept = {}

  return (
    <Stack
    direction="column"
    sx={{
      minHeight: 1,
      p: 4
    }}>
      <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      >
        <Typography variant="h5">
          Buscar proyectos
        </Typography>
        <IconButton onClick={() => {setOpenFilter(!openFilter); console.log(openFilter)}}>
          <FilterAltIcon/>
        </IconButton>
      </Stack>
      <TextField
        fullWidth
        id="input-with-icon-textfield"
        placeholder="..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        value=""
      />
      { openFilter && (
        <Typography variant="h6" gutterBottom>
          Filtrar
        </Typography>
        )
      }

    </Stack>
  )
}

export default ProjectFinder