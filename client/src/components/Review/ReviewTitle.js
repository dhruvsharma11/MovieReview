import * as React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

const ReviewTitle = (props) => {
  return (
    <TextField
      fullWidth
      required
      label="Review Title"
      value={props.enteredTitle}
      onChange={props.handleTitleChange}
    />
  );
};

export default ReviewTitle;
