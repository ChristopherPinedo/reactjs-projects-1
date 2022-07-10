import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateTodoButton = ({style, button, todos, setTodos}) => {

const [ open, setOpen ] = useState(false)

const defaultTodo = {
  title: "",
  description: "",
  completed: false
}
const [ newTodo, setNewTodo ] = useState(defaultTodo)

const handleOpen = () => setOpen(true);

const handleClose = () => setOpen(false);


const handleTextField = (event, type) => {
  setNewTodo({
    ...newTodo,
    [type]: event.target.value
  });
}

const createTodo = () => {
  let newTodos = todos;
  newTodos.push(newTodo);
  console.log(newTodos);
  console.log(todos);
  setTodos(newTodos);
  handleClose();
};

  return (
    <>
    {button
    ? (
      <Button
      sx={style}
      variant="contained"
      startIcon={<AddIcon/>}
      onClick={handleOpen}
      >Agregar</Button>
    )
    : (<Fab
      sx={style}
      color="primary"
      onClick={handleOpen} >
        <AddIcon />
      </Fab>)}
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new todo, please enter a title and a description here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => handleTextField(event, "title")}
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            onChange={(event) => handleTextField(event, "description")}
          />
        </DialogContent>
        <DialogActions sx={{p: 3, pt: 0}} >
          <Button variant="contained" onClick={createTodo}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export  { CreateTodoButton }