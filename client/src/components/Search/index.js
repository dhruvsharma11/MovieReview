import React from 'react'
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Search from "./Search";

import { useNavigate } from "react-router-dom";

const App = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#292828' }}>
            <Toolbar>
            <Link
                onClick={() => navigate("/Search")}
                underline="none"
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  Search
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
                onClick={() => navigate("/Review")}
                color="inherit"
                sx={{ margin: 2 }}
              >
                <Typography variant="h6" component="div">
                  Review
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
        <Search/>
    </div>
  )
}

export default App;