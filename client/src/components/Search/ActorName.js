import React from 'react'
import TextField from "@mui/material/TextField";


const ActorName = (props) => {
  return (
    <TextField
    fullWidth
    label="Actor Name"
    value={props.enteredActor}
    onChange={props.handleActorChange}
    style={{ maxWidth: "60%" }}
/>
  )
}

export default ActorName