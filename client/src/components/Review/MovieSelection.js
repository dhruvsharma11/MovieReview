import * as React from "react";
import { Select, MenuItem, Box, FormControl, InputLabel } from "@mui/material";

const MovieSelection = (props) => {

  const initialMovies = props.movies.map((movie) => movie.name);

  return (
    <Box sx={{ width: "50%" }}>
      <FormControl fullWidth>
        <InputLabel> Select a movie </InputLabel>
        <Select
          label="Select a Movie"
          value={props.selectedMovie}
          onChange={props.handleSelectionChange}
        >
          
          {initialMovies.map((movie, index) => (
            <MenuItem key={index} value={movie}>
              {movie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MovieSelection;
