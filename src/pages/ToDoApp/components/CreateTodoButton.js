import React from 'react';
import { Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateTodoButton = ({style, button}) => {
  return (
    button 
    ? (
      <Button
      sx={style}
      variant="contained"
      startIcon={<AddIcon/>}
      >Agregar</Button>
    )
    : (<Fab sx={style} color="primary">
        <AddIcon />
      </Fab>)
  )
}

export  { CreateTodoButton }