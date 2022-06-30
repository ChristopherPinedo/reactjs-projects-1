import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { todo } from './assets/todo';

import Box from '@mui/material/Box';
import { Container, Divider, Stack } from '@mui/material';

function ToDoApp() {
  return (
    <Container sx={{minHeight: "90vh"}}>
      <Stack
      direction={{sm: "column", md: "row"}}
      spacing={{xs: 1, md: 4}}
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
    </Container>
  )
}

export default ToDoApp