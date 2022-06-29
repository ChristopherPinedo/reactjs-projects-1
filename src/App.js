import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { CssBaseline } from '@mui/material/';
  import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ToDoApp from './pages/ToDoApp';

function App() {

  const [mode, setMode] = React.useState('light');

  const globalTheme = createTheme({
    palette: {
      mode: mode,
    },
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
                <Route path="/todoapp" element={<ToDoApp/>} />
              </Routes>
            </ResponsiveDrawer>
          } />
        </Routes>
        {/* <ResponsiveDrawer mode={mode} setMode={setMode}>
          <Home/>
        </ResponsiveDrawer> */}
      </HashRouter>
    </ThemeProvider>
  )
}
export default App