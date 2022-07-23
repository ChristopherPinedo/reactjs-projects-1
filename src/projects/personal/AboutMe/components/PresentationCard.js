import React from 'react'

import { Button, Box, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Stack, Typography } from '@mui/material'

import profileImage from "../../../../assets/profileImg.jpg";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const PresentationCard = () => {
  return (
    <Card sx={{ maxWidth: "500px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        {/* <CardMedia
          component="img"
          alt="profile image"
          image={profileImage}
          sx={{
            height: "120px",
            width: "120px",
            borderRadius: 1,
            m: 2,
            mr: 0
          }}
        /> */}
        <Box borderRadius="12px" sx={{bgcolor:"text.secondary", display:"flex", alignItems:"center"}}>
          <AccountBoxIcon sx={{width:"120px", height:"120px", color:"background.paper"}} />
        </Box>

        <CardContent sx={{ "&:last-child": { px: 2, py: 0 } }}>
          <Typography variant="body2" color="text.secondary">
            “ Ingeniero de sofware residente en Perú con 2 años de
            experiencia en desarrollo web especializado en frontend usando
            React.js ”
          </Typography>
        </CardContent>
      </Stack>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", gap: 2, p:2 }}
      >
        <Button fullWidth variant="contained">
          Descargar CV
        </Button>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          width="100%"
          divider={<Divider orientation="vertical" variant="middle" flexItem />}
        >
          <Stack
            direction="row"
            sx={{ flexGrow: 3, justifyContent: "space-evenly" }}
          >
            <IconButton size="large">
              <GitHubIcon />
            </IconButton>
            <IconButton size="large">
              <LinkedInIcon />
            </IconButton>
            <IconButton size="large">
              <EmailIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            <IconButton size="large">
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default PresentationCard