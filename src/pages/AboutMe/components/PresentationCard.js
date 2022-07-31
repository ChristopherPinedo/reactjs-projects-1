import React from 'react'

import { Link, Button, Box, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Stack, Typography, Paper } from '@mui/material'

import profileImage from "../../../assets/profileImg.jpg";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import { personalData } from '../../../data/personalData';
import CV from '../../../assets/Christopher_Pinedo.pdf';

import ReactWhatsapp from 'react-whatsapp';
import PresentationDialog from './PresentationDialog';

const PresentationCard = () => {
  return (
    <Card sx={{ maxWidth: "500px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <CardMedia
          component="img"
          alt="Profile image"
          image={profileImage}
          sx={{
            height: "120px",
            width: "120px",
            borderRadius: 1,
          }}
        />
        {/* <Box borderRadius="12px" sx={{bgcolor:"text.secondary", display:"flex", alignItems:"center"}}>
          <AccountBoxIcon sx={{width:"120px", height:"120px", color:"background.paper"}} />
        </Box> */}

        <CardContent sx={{ "&:last-child": { px: 2, py: 0 } }}>
          <Typography variant="p" color="text.secondary">
            { personalData.description }
          </Typography>
        </CardContent>
      </Stack>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", gap: 2, p:2 }}
      >
        <Button
        fullWidth
        variant="contained"
        component={"a"}
        download="CV_ChristopherPinedo.pdf"
        href={CV}
        >
          Descargar CV
        </Button>
        <Paper sx={{width:1}} variant="outlined">
          <Stack
            direction="row"
            justifyContent="space-evenly"
            divider={<Divider orientation="vertical" variant="middle" flexItem />}
          >
            <Stack
              direction="row"
              sx={{ flexGrow: 3, justifyContent: "space-evenly" }}
            >
              <IconButton
              size="large"
              sx={{color:"text.primary"}}
              component={Link}
              href={ personalData.github }
              target="_blank"
              rel="noopener"
              >
                <GitHubIcon  sx={{fontSize:35}}/>
              </IconButton>
              <IconButton
              color="primary"
              size="large"
              component={Link}
              href={ personalData.linkedIn }
              target="_blank"
              rel="noopener"
              >
                <LinkedInIcon sx={{fontSize:35}}/>
              </IconButton>
              {/* <IconButton size="large">
                <EmailIcon />
              </IconButton> */}
            </Stack>
            <Stack
              direction="row"
              sx={{ flexGrow: 1, justifyContent: "center" }}
            >
              <IconButton
              color="success"
              size="large"
              component={ReactWhatsapp}
              number={personalData.phone}
              message="Hola Christopher...">
                <WhatsAppIcon sx={{fontSize:35}}/>
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </CardActions>

      {/* <PresentationDialog typeMessage="Whatsapp"/> */}

    </Card>
  )
}

export default PresentationCard