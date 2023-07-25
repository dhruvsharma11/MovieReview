import * as React from 'react';
import Review from './Review';

import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

import { useNavigate } from "react-router-dom";


const App = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#292828' }}>
            <Toolbar>
            <Link
                onClick={() => navigate("/Review")}
                underline="none"
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  Review
                </Typography>
              </Link>
              <Link
                onClick={() => navigate("/")}
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  Landing
                </Typography>
              </Link>
              <Link
                onClick={() => navigate("/Search")}
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  Search
                </Typography>
              </Link>
              <Link
                onClick={() => navigate("/MyPage")}
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  MyPage
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      <Review />

    </div>
  );
}

export default App;
