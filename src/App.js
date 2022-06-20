import React from 'react';
import {
  CssBaseline,
  Grid,
  Container,
  Box,
  Button,
  Typography,
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
          bgcolor: "info.dark",
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Typography variant="h3" component="h1">MUI Projects</Typography>

        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default App