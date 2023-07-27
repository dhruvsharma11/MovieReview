import React from 'react'
import TextField from "@mui/material/TextField";


const MovieTitle = (props) => {
  return (
    <TextField
    fullWidth
    label="Movie Title"
    value={props.enteredMovie}
    onChange={props.handleMovieChange}
    style={{ maxWidth: "50%" }}
    />
  )
}

export default MovieTitle