import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const TodoSearch = ({searchValue, setSearchValue}) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      fullWidth
      id="input-with-icon-textfield"
      placeholder="Buscar..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}

export { TodoSearch }