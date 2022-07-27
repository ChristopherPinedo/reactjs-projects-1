import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import {
  Box,
  Divider,
  Skeleton,
  Stack,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TodoContext, TodoProvider } from './TodoContext';

function ToDoApp() {
  // const {
  //   items: todos,
  //   saveItems: setTodos,
  //   error,
  //   loading,
  // } = useLocalStorage("TODOS_V1", [], 2000)

  // const [ searchValue, setSearchValue ] = useState("")

  // const completedTodos = todos.filter( todo => !!todo.completed ).length;
  // const totalTodos = todos.length;

  // let searchedTodos;
  // if(searchValue.length >= 1) {
  //   searchedTodos = todos.filter(todo => {
  //     const searchText = searchValue.toLowerCase();
  //     const todoText = todo.title.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // } else {
  //   searchedTodos = todos;
  // }

  // const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {
          ({
            error,
            loading,
            searchedTodos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            matchesMD,
            todos,
            setTodos,
          }) => (
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
                  { loading && (
                    <>
                      <Skeleton width="100%" height="88px" variant="rectangular" sx={{pb:4, borderRadius:2}} />
                      <Skeleton width="100%" height="88px" variant="rectangular" sx={{borderRadius:2}} />
                    </>
                    ) }
                  { (loading && !searchedTodos.length) && <Typography variant="h5" > Crea tu primer todo !! </Typography> }
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
      </TodoContext.Consumer>
    </TodoProvider>

    // <Box sx={{height: 1,width: 1, position: "relative"}}>
    // <Stack
    // direction={{xs: "column", md: "row"}}
    // spacing={4}
    // divider={<Divider flexItem variant="middle" orientation={matchesMD ? "vertical" : "horizontal"} />}
    // sx={{
    //   height: 1,
    //   width: 1,
    //   alignItems: {xs: "center", md: "flex-start"},
    //   justifyContent: {xs: "flex-start", md: "space-evenly"},
    //   padding: 4,
    // }}
    // >
    //   {/* ------------- TODO HEADER */}
    //   <Stack
    //   direction="column"
    //   spacing={2}
    //   alignItems="center"
    //   >
    //     <TodoCounter
    //     totalTodos={totalTodos}
    //     completedTodos={completedTodos} />
    //     <TodoSearch
    //     searchValue={searchValue}
    //     setSearchValue={setSearchValue} />
    //     {matchesMD
    //     ? <CreateTodoButton
    //       button
    //       style={{position: "static", width: "75%"}}
    //       todos={todos}
    //       setTodos={setTodos} />
    //     : null}
    //   </Stack>
    //   {/* ------------- TODO BODY */}
    //   <Stack
    //   spacing={4}
    //   alignItems="center"
    //   width={1}
    //   >
    //     { error && <Typography variant="p" >Hubo un error...</Typography> }
    //     { loading && (
    //       <>
    //         <Skeleton width="100%" height="88px" variant="rectangular" sx={{pb:4, borderRadius:2}} />
    //         <Skeleton width="100%" height="88px" variant="rectangular" sx={{borderRadius:2}} />
    //       </>
    //       ) }
    //     { (loading && !searchedTodos.length) && <Typography variant="h5" > Crea tu primer todo !! </Typography> }
    //     {searchedTodos.map(({title, description, completed}, index) => {
    //       return (
    //         <TodoItem
    //         key={index + title}
    //         title={title}
    //         description={description}
    //         completed={completed}
    //         todos={todos}
    //         setTodos={setTodos}
    //         />
    //       )
    //     } )}
    //   </Stack>
    // </ Stack>
    // {matchesMD
    // ? null
    // : <CreateTodoButton
    // style={{
    //   position: "fixed",
    //   right: "1rem",
    //   bottom: "1rem",
    // }}
    // todos={todos}
    // setTodos={setTodos}
    // />}
    // </Box>

  )
}

export default ToDoApp