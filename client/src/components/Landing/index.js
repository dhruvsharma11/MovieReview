import React from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const backgroundImage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dfyo68y-942732c1-05f3-4384-b539-57d213f4c8ef.png/v1/fill/w_715,h_1118,q_70,strp/spider_man_across_the_spider_verse_poster_by_iamtherealnova_dfyo68y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcxMiIsInBhdGgiOiJcL2ZcLzY3NGIzNmYwLTc3NzEtNDE4OC1iMzgyLWFkZTJkNDk1NTQ0YVwvZGZ5bzY4eS05NDI3MzJjMS0wNWYzLTQzODQtYjUzOS01N2QyMTNmNGM4ZWYucG5nIiwid2lkdGgiOiI8PTYyMTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sGRSkAUvEkc5ldzJItoUVzwfoYIIWdri_t3AHiKMB4U";

  const secondImage =
    "https://assets-prd.ignimgs.com/2022/07/21/oppenheimer-poster-1658411601593.jpeg"; 
    
  const thirdImage = "https://i.redd.it/w1f8pcu5tz5b1.jpg"

  return (
    <Box sx={{ backgroundColor: "#CED4DA", minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#292828" }}>
              <Toolbar>
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
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
          <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
            CritiCinema
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: 2,
                border: 1,
                maxWidth: "80%",
                maxHeight: "80%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)", 
                },
              }}
              alt="Spiderman"
              src={backgroundImage}
            />

            <Box
              component="img"
              sx={{
                borderRadius: 2,
                border: 1,
                maxWidth: "50%",
                maxHeight: "50%",
                position: "absolute",
                top: "50%",
                left: "15%",
                transform: "translateY(-50%)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)", 
                },
              }}
              alt="Second Image"
              src={secondImage}
            />

            <Box
              component="img"
              sx={{
                borderRadius: 2,
                border: 1,
                maxWidth: "50%",
                maxHeight: "50%",
                position: "absolute",
                top: "50%",
                right: "15%",
                transform: "translateY(-50%)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)", 
                },
              }}
              alt="Third Image"
              src={thirdImage}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                borderRadius: 4,
              }}
            >
              <Typography variant="h4" component="div">
                Newest Releases
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
