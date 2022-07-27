import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  
  const {
    items: todos,
    saveItems: setTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", [], 2000)

  const [ searchValue, setSearchValue ] = React.useState("")

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
    <TodoContext.Provider value={{
      loading,
      error,
      searchValue,
      setSearchValue,
      completedTodos,
      totalTodos,
      searchedTodos,
      matchesMD,
      todos,
      setTodos,
    }} >
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }