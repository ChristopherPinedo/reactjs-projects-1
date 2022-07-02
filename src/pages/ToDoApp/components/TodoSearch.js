import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const TodoSearch = () => {
  return (
    <TextField
      fullWidth
      id="input-with-icon-textfield"
      placeholder="Buscar"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  )
}

export { TodoSearch }