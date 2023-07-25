import * as React from "react";
//import all necessary libraries here, e.g., Material-UI Typography, as follows
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const ReviewBody = (props) => {
  //states declarations
  //constants and functions declarations

  return (
    <TextField
      label="Enter your Review"
      required
      multiline
      fullWidth
      rows={3}
      inputProps={{ maxLength: 200 }}
      value={props.enteredReview}
      onChange={props.handleReviewChange}
    />
  );
};

export default ReviewBody;
