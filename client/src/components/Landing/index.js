import React from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#292828" }}>
              <Toolbar>
                {/* App Title and Subtitle */}
                <Box sx={{ display: "flex", alignItems: "center", marginRight: 16 }}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CritiCinema
                  </Typography>
                </Box>

                {/* Links to other pages */}
                <Link onClick={() => navigate("/")} underline="none" color="inherit" sx={{ margin: 2 }}>
                  <Typography variant="h6" component="div">
                    Landing
                  </Typography>
                </Link>
                <Link onClick={() => navigate("/Search")} color="inherit" sx={{ margin: 2 }}>
                  <Typography variant="h6" component="div">
                    Search
                  </Typography>
                </Link>
                <Link onClick={() => navigate("/Review")} color="inherit" sx={{ margin: 2 }}>
                  <Typography variant="h6" component="div">
                    Review
                  </Typography>
                </Link>
                <Link onClick={() => navigate("/MyPage")} color="inherit" sx={{ margin: 2 }}>
                  <Typography variant="h6" component="div">
                    MyPage
                  </Typography>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* Parent container for image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh", // You can adjust the height as needed
            }}
          >
            {/* Placeholder Image, will use IMDB Source later */}
            <Box
              component="img"
              sx={{
                borderRadius: 2,
                border: 1,
                maxWidth: "80%",
                maxHeight: "80%",
              }}
              alt="Spiderman"
              src="https://cdn.marvel.com/content/1x/marvsmposterbk_intdesign.jpg"
            />
          </Box>
          <Grid item justifyContent="center" align="center">
            <Typography variant="h3" component="div">
              Grossing Movies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
