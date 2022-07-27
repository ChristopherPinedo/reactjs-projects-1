import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { CssBaseline } from '@mui/material/';
  import { HashRouter, Route, Routes } from 'react-router-dom';
import SearchProjects from './pages/SearchProjects';
import ToDoApp from './projects/platzi/ToDoApp';
import AboutMe from './pages/AboutMe';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

  const {
    items: mode,
    saveItems: setMode,
    error,
    loading,
  } = useLocalStorage("SITE_MODE", ['light'], 0)

  // const [mode, setMode] = React.useState('light');

  const globalTheme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  });

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="*" element={
            <ResponsiveDrawer mode={mode} setMode={setMode}>
              <Routes>
                <Route exact path="/" element={<AboutMe/>} />
                <Route path="/searchProjects" element={<SearchProjects/>} />
                <Route path="/platzi/todoApp" element={<ToDoApp/>} />
                <Route path="/personal/portfolio" element={<AboutMe/>} />
              </Routes>
            </ResponsiveDrawer>
          } />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
export default App