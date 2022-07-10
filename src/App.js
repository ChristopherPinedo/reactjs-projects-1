import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { CssBaseline } from '@mui/material/';
  import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './projects/personal/Home';
import ToDoApp from './projects/platzi/ToDoApp';

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
                <Route exact path="/" element={<Home/>} />
                <Route path="/todoApp" element={<ToDoApp/>} />
              </Routes>
            </ResponsiveDrawer>
          } />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
export default App