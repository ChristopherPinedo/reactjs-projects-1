import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { CssBaseline } from '@mui/material/';
  import { HashRouter, Route, Routes } from 'react-router-dom';
import ProjectFinder from './projects/personal/ProjectFinder';
import ToDoApp from './projects/platzi/ToDoApp';
import AboutMe from './projects/personal/AboutMe';

function App() {

  const [mode, setMode] = React.useState('light');

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
                <Route path="/projects" element={<ProjectFinder/>} />
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