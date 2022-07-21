import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import {
  Box,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ToDoApp() {
  const {
    items: todos,
    saveItems: setTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", [])

  const [ searchValue, setSearchValue ] = useState("")

  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos;
  if(searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.title.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{height: 1,width: 1, position: "relative"}}>
      <Stack
      direction={{xs: "column", md: "row"}}
      spacing={4}
      divider={<Divider flexItem variant="middle" orientation={matchesMD ? "vertical" : "horizontal"} />}
      sx={{
        height: 1,
        width: 1,
        alignItems: {xs: "center", md: "flex-start"},
        justifyContent: {xs: "flex-start", md: "space-evenly"},
        padding: 4,
      }}
      >
        {/* ------------- TODO HEADER */}
        <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        >
          <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos} />
          <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
          {matchesMD
          ? <CreateTodoButton
            button
            style={{position: "static", width: "75%"}}
            todos={todos}
            setTodos={setTodos} />
          : null}
        </Stack>
        {/* ------------- TODO BODY */}
        <Stack
        spacing={4}
        alignItems="center"
        width={1}
        >
          { error && <Typography variant="p" >Hubo un error...</Typography> }
          { loading && <Typography variant="p" >Cargando...</Typography> }
          { (loading && !searchedTodos.length) && <Typography variant="p" >Crea tu primer todo</Typography> }
          {searchedTodos.map(({title, description, completed}, index) => {
            return (
              <TodoItem
              key={index + title}
              title={title}
              description={description}
              completed={completed}
              todos={todos}
              setTodos={setTodos}
              />
            )
          } )}
        </Stack>
      </ Stack>
      {matchesMD
      ? null
      : <CreateTodoButton
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
      }}
      todos={todos}
      setTodos={setTodos}
      />}
    </Box>
  )
}

export default ToDoApp