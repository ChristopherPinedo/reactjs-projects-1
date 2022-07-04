import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { todo } from './assets/todo';

import {
  Container,
  Divider,
  Stack,
  Box
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function ToDoApp() {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container sx={{height: 1, position: "relative"}}>
      <Stack
      direction={{xs: "column", md: "row"}}
      spacing={{xs: 4, md: 4}}
      divider={<Divider flexItem variant="middle" orientation={matchesMD ? "vertical" : "horizontal"} />}
      sx={{
        height: 1,
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
          <TodoCounter />
          <TodoSearch />
          {matchesMD
          ? <CreateTodoButton button style={{position: "static", width: "75%"}} />
          : null}
        </Stack>
        {/* ------------- TODO BODY */}
        <Stack
        minWidth="60%"
        spacing={4}
        alignItems="center"
        >
          {todo.map(({title, description, completed}, index) => {
            return (
              <TodoItem
              key={index + title}
              index={index}
              title={title}
              description={description}
              completed={completed}
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
      />}
    </Container>
  )
}

export default ToDoApp