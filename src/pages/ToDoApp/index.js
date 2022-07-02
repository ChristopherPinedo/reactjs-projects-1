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
      spacing={{xs: 1, md: 4}}
      divider={<Divider flexItem variant="middle" orientation={matchesMD ? "vertical" : "horizontal"} />}
      sx={{
        height: 1,
        alignItems: {xs: "center", md: "flex-start"},
        justifyContent: {xs: "flex-start", md: "center"},
        padding: 4,
      }}
      >
        <Stack
        direction="column"
        spacing={1}
        >
          <TodoCounter />
          <TodoSearch />
          {matchesMD
          ? null
          : <CreateTodoButton sx={{position: "relative"}} /> }
        </Stack>
        <Stack
        spacing={{xs: 1, md: 2}}
        >
          {todo.map(({title, description, completed}, index) => {
            return (
              <TodoItem
              key={index + title}
              title={title}
              description={description}
              completed={completed}
              />
            )
          } )}
        </Stack>
      </ Stack>
      {matchesMD
      ? <CreateTodoButton
        sx={{
          position: "absolute",
          right: 2,
          left: 2,
        }}
        />
      : null}
    </Container>
  )
}

export default ToDoApp