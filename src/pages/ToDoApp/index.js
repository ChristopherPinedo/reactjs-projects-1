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
    <Stack
      direction={{xs: "column", md: "row"}}
      spacing={{xs: 1, md: 4}}
      divider={<Divider flexItem variant="middle" orientation={matchesMD ? "vertical" : "horizontal"} />}
      sx={{
        height: 1,
        alignItems: "center",
        justifyContent: "Center",
      }}
    >
        <Box>
          <TodoCounter />
          <TodoSearch />
          <CreateTodoButton />
        </Box>
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
  )
}

export default ToDoApp