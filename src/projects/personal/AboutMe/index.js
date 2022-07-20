import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import profileImage from '../../../assets/profileImg.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';

const AboutMe = () => {

  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Container sx={{p:{xs:2, lg:4}, pt:{xs:4}}}>
      <Stack
      alignItems="center"
      spacing={4}
      divider={<Divider flexItem variant="middle" orientation="horizontal" />}
      >
        <Stack>
          <Typography variant='h3' component='h2'>Christopher Pinedo</Typography>
          <Typography variant='h5' component='h3'>Frontend Developer</Typography>
        </Stack>
        <Stack
        direction={{xs:"column", lg:"row"}}
        spacing={4}
        divider={<Divider flexItem variant="middle" orientation={matchesLG ? "vertical" : "horizontal"} />}
        sx={{
          height: 1,
          alignItems: {xs: "center", lg: "flex-start"},
          justifyContent: {xs: "flex-start", lg: "space-evenly"},
          padding: {xs: 0, lg:4},
        }}
        >
          <Card sx={{maxWidth: "500px"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
              <CardMedia
                component="img"
                alt="profile image"
                image={profileImage}
                sx={{
                  height: "120px",
                  width:"120px",
                  borderRadius: 1,
                  m: 2,
                  mr: 0
                }}
              />
              <CardContent sx={{"&:last-child": {pb:2}}} >
                <Typography variant="body2" color="text.secondary" >
                “ Ingeniero de sofware residente en Perú con 2 años de experiencia en desarrollo web especializado en frontend usando React.js ”
                </Typography>
              </CardContent>
            </Stack>
            <CardActions sx={{display: 'flex', flexDirection: 'column', gap:1}}>
              <Button fullWidth variant="contained" >Descargar CV</Button>
              <Stack
              direction="row"
              justifyContent="space-evenly"
              width="100%"
              divider={<Divider orientation="vertical" flexItem />}>
                <Stack direction="row" sx={{flexGrow:3, justifyContent:"space-evenly"}}>
                  <IconButton size="large" >
                    <GitHubIcon/>
                  </IconButton>
                  <IconButton size="large">
                    <LinkedInIcon/>
                  </IconButton>
                  <IconButton size="large">
                    <EmailIcon/>
                  </IconButton>
                </Stack>
                <Stack  direction="row" sx={{flexGrow:1, justifyContent:"center"}}>
                  <IconButton size="large">
                    <WhatsAppIcon/>
                  </IconButton>
                </Stack>
              </Stack>
              
            </CardActions>
          </Card>
          <Stack >
            <Typography variant='h4'>Informacion</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default AboutMe