import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <Box sx={{
      bgcolor: "background.default",
      minHeight: "90%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 6,
      padding: 4,
    }}>
      {/* <Typography variant="p">
        Compendio de proyectos basados en react con distintos stacks y metodologias de diferentes escuelas.
      </Typography> */}
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
  )
}

export default Home