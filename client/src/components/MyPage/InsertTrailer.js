import React from 'react'
import TextField from "@mui/material/TextField";


const InsertTrailer = (props) => {
    return (
        <TextField
        fullWidth
        required
        label="Trailer Youtube Link"
        value={props.trailerURL}
        onChange={props.handleTrailerChange}
        style={{ maxWidth: "100%" }}
        />
      )
    }


export default InsertTrailer