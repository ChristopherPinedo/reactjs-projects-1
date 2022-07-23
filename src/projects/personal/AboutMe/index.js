import React from "react";
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
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import PresentationHeader from "./components/PresentationHeader";
import PresentationCard from "./components/PresentationCard";

const AboutMe = () => {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Container sx={{ p: { xs: 2, lg: 4 }, pt: { xs: 4 } }}>
      <Stack
        alignItems="center"
        spacing={4}
        divider={<Divider flexItem variant="middle" orientation="horizontal" />}
      >
        <PresentationHeader/>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={4}
          divider={
            <Divider
              flexItem
              variant="middle"
              orientation={matchesLG ? "vertical" : "horizontal"}
            />
          }
          sx={{
            height: 1,
            alignItems: { xs: "center", lg: "flex-start" },
            justifyContent: { xs: "flex-start", lg: "space-evenly" },
            padding: { xs: 0, lg: 4 }
          }}
        >
          <PresentationCard />
          {/* <Stack>
            <Typography variant="h4">Info</Typography>
          </Stack> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutMe;
