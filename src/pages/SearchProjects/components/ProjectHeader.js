import React from 'react';

import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const ProjectHeader = () => {

  const [filter, setFilter] = React.useState('nombre');

  const handleChangeFilter = (event) =>  {
    setFilter(event.target.value);
  };

  return (
    <Stack
    alignItems="center"
    spacing={4}
    >
      <Typography variant="h3" component="h4" >
        Proyectos
      </Typography>
      {/* <Stack
      spacing={2}
      width={1}
      >
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          placeholder={`Buscar por ${filter} ...`}
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
        <FormControl>
          <FormLabel sx={{display:"flex", alignItems: "center"}}>
            <FilterAltIcon fontSize="small"/>
            <Typography variant="p" component="p" >Filtrar busqueda</Typography>
          </FormLabel>
          <RadioGroup
            row
            name="radio-filter-group"
            value={filter}
            onChange={handleChangeFilter}
          >
            <FormControlLabel value="nombre" control={<Radio size='small'/>} label="Nombre" />
            <FormControlLabel value="tecnologia" control={<Radio size='small'/>} label="Tecnologia" />
            <FormControlLabel value="concepto" control={<Radio size='small'/>} label="Concepto" />
          </RadioGroup>
        </FormControl>
      </Stack> */}
    </Stack>
  )
}

export default ProjectHeader