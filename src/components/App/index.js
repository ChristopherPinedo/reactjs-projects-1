import React from 'react';
import './styles';
import {
  CssBaseline,
  Grid,
  Container,
  Box,
  Button,
  } from '@mui/material/'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{
          height: '100vh',
          bgcolor: "grey.800",
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <h1>React Projects</h1>
        <Button href="/page1" variant="contained">
          Page 1
        </Button>
        <Button href="/page2" variant="contained">
          Page 2
        </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App