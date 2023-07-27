import React from 'react'
import TextField from "@mui/material/TextField";


const DirectorName = (props) => {
  return (
    <TextField
    fullWidth
    label="Director Name"
    value={props.enteredDirector}
    onChange={props.handleDirectorChange}
    style={{ maxWidth: "60%" }}
    />
  )
}

export default DirectorName