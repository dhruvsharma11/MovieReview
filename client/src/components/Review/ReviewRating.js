import * as React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const ReviewRating = ((props) => {

  return (
    <FormControl>
      <FormLabel>Rating</FormLabel>
      <RadioGroup
        name="ratings-group"
        row
        value={props.selectedRating}
        onChange={props.handleRatingChange}
      >
        <FormControlLabel
          labelPlacement="top"
          value={1}
          control={<Radio />}
          label="1"
        />
        <FormControlLabel
          labelPlacement="top"
          value={2}
          control={<Radio />}
          label="2"
        />
        <FormControlLabel
          labelPlacement="top"
          value={3}
          control={<Radio />}
          label="3"
        />
        <FormControlLabel
          labelPlacement="top"
          value={4}
          control={<Radio />}
          label="4"
        />
        <FormControlLabel
          labelPlacement="top"
          value={5}
          control={<Radio />}
          label="5"
        />
      </RadioGroup>
    </FormControl>
  );
});
export default ReviewRating;
