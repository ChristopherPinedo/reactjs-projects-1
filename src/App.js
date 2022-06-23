import React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import {
  CssBaseline,
  Grid,
  Container,
  Box,
  Button,
  Typography,
  Chip,
  } from '@mui/material/';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveDrawer>
        <Box sx={{
          bgcolor: "grey.800",
          minHeight: "90%",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
          padding: 4,
        }}>
          <Typography variant="p">
            Compendio de proyectos basados en react con distintos stacks y metodologias de diferentes escuelas.
          </Typography>
          <Box sx={{width: "100%"}}>
            <Typography variant="h6" mb={2}>Tecnologias</Typography>
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: 'center',
            }}>
              <Chip label="Tech 1"/>
              <Chip label="Tech 2"/>
              <Chip label="Tech 3"/>
              <Chip label="Tech 4"/>
              <Chip label="Tech 5"/>
              <Chip label="Tech 6"/>
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="h6" mb={2}>Conceptos</Typography>
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}>
              <Chip label="Concepto 1"/>
              <Chip label="Concepto 2"/>
              <Chip label="Concepto 3"/>
              <Chip label="Concepto 4"/>
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="h6" mb={2}>Escuelas</Typography>
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}>
              <Chip label="Escuela 1"/>
              <Chip label="Escuela 2"/>
              <Chip label="Escuela 3"/>
              <Chip label="Escuela 4"/>
            </Box>
          </Box>
        </Box>
      </ResponsiveDrawer>
    </ThemeProvider>
  )
}
export default App