import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Switch } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PageviewIcon from '@mui/icons-material/Pageview';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Link as RouterLink } from 'react-router-dom';

import { projectsData } from '../data/projectsData';
import { ExpandMore } from '@mui/icons-material';
import { useLocalStorage } from '../hooks/useLocalStorage';

const drawerWidth = 240;

function ResponsiveDrawer(props) {

  // const elementRef = React.useRef(null);
  // console.log(elementRef.current?.clientHeight);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const handleClick = () => {
  //   setOpen(!open);
  // }


  const drawer = (
    <div>
      <Toolbar sx={{justifyContent: "center" }} >
        <Typography variant="h6">Portafolio Web</Typography>
      </Toolbar>
      <Divider />
      <List>
          {
            <>
              <ListItemButton component={RouterLink} to="/" >
                <ListItemText primary="Sobre mi" />
                <ListItemIcon sx={{justifyContent: "end"}} >
                  <AccountBoxIcon/>
                </ListItemIcon>
              </ListItemButton>
              <Divider/>
              <ListItemButton component={RouterLink} to="/searchProjects" >
                <ListItemText primary="Proyectos" />
                <ListItemIcon sx={{justifyContent: "end"}} >
                  <PageviewIcon/>
                </ListItemIcon>
              </ListItemButton>
              <Divider/>
              {
                projectsData.sections.map((element, index) => {
                  return(
                    <>
                      <Accordion
                      key={index}
                      disableGutters
                      square
                      variant="string"
                      sx={{
                        "&::before": {height:0},
                        bgcolor: "inherit"
                        }}>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        >
                          <Typography pl={2}>{element.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{p: 0}}>
                          {element.content.map((element1, index1) => {
                            return (
                              <ListItemButton
                              key={index1}
                              component={RouterLink}
                              to={element1.route}
                              sx={{ pl: 6 }}>
                                <ListItemText primary={element1.title} />
                              </ListItemButton>
                            )
                          })}
                        </AccordionDetails>
                      </Accordion>
                    </>
                  )
                })
              }
            </>
          }
        {/* ///////////////////////////////////////// */}
      </List>
      <Divider/>
      <ListItem sx={{justifyContent: "space-between" }}>
        <ListItemText primary="Dark mode" />
        <Switch
        checked={props.mode === "dark" ? true : false }
        onChange={() => props.setMode(props.mode === "light" ? "dark" : "light")} />
        <ListItemIcon sx={{justifyContent: "end"}} > <DarkModeIcon/> </ListItemIcon>
      </ListItem>
      <Divider/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', minHeight: "100vh",}}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display:{sm: "none",}}}
            >
            Portafolio Web
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh"
        }}
      >
        <Toolbar/>
        {/* 02/07/22 - Pospuesto - No encontre a quien refereciar con useRef */}
        {/* <Box sx={{height: `calc(100vh - ${elementRef.current?.clientHeight}px)` }}> */}
        <Box >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
