import * as React from "react";
import ReviewTitle from "./ReviewTitle";
import ReviewBody from "./ReviewBody";
import ReviewRating from "./ReviewRating";
import MovieSelection from "./MovieSelection";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import callApiGetMovies from "./CallApiGetMovies";
import callApiLoadReview from "./CallApiLoadReview";

const Review = () => {
  let serverURL = "";
  const [userId, setUserId] = React.useState(1); //userId is a number, the id of the user
  const [movieID, setMovieID] = React.useState(0);

  const [movies, setMovies] = React.useState([]); //movies is an array of objects, each object is a movie
  const [selectedMovie, setSelectedMovie] = React.useState(""); //selectedMovie is an object, the selected movie
  const [enteredTitle, setEnteredTitle] = React.useState(""); //enteredTitle is a string, the title of the review
  const [enteredReview, setEnteredReview] = React.useState(""); //enteredBody is a string, the body of the review
  const [selectedRating, setSelectedRating] = React.useState(""); //selectedRating is a number, the rating of the review

  const [storedMovie, setStoredMovie] = React.useState(); //selectedMovie is an object, the selected movie
  const [storedTitle, setStoredTitle] = React.useState(); //enteredTitle is a string, the title of the review
  const [storedReview, setStoredReview] = React.useState(); //enteredBody is a string, the body of the review
  const [storedRating, setStoredRating] = React.useState(); //selectedRating is a number, the rating of the review

  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const handleSelectionChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleReviewChange = (event) => {
    setEnteredReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);

    if (selectedMovie && enteredTitle && enteredReview && selectedRating) {
      setValidated(true);
      const reviewData = {
        reviewTitle: enteredTitle,
        reviewContent: enteredReview,
        reviewScore: selectedRating,
        userID: userId,
        movieID: movieID,
      };
      callApiLoadReview(serverURL, reviewData);
      resetValues();
    } else {
      setValidated(false);
    }
  };

  const resetValues = () => {
    setStoredMovie(selectedMovie);
    setStoredTitle(enteredTitle);
    setStoredReview(enteredReview);
    setStoredRating(selectedRating);
    setSelectedMovie("");
    setEnteredTitle("");
    setEnteredReview("");
    setSelectedRating("");
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    callApiGetMovies(serverURL).then((res) => {
      setMovies(res);
    });
  };

  React.useEffect(() => {
    getMovieID();
  }, [selectedMovie]);

  const getMovieID = () => {
    const chosenMovie = movies.find((movie) => movie.name === selectedMovie);
    if (chosenMovie) {
     setMovieID(chosenMovie.id);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Set the height of the parent container to fill the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CED4DA",
      }}
    >
      <Grid sx={{ p: "1rem", height: "100vh" }} container>
        <Grid item xs={12}>
          <Typography variant="h3" color="black">
            Review a Movie
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <MovieSelection
              movies={movies}
              setMovies={setMovies}
              selectedMovie={selectedMovie}
              handleSelectionChange={handleSelectionChange}
            />
            {!selectedMovie && buttonClicked && !validated && (
              <Typography variant="body2" color="error">
                Select your movie
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <ReviewTitle
              enteredTitle={enteredTitle}
              handleTitleChange={handleTitleChange}
            />
            {!enteredTitle && buttonClicked && !validated && (
              <Typography variant="body2" color="error">
                Enter your review title
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <ReviewBody
              enteredReview={enteredReview}
              handleReviewChange={handleReviewChange}
            />
            {!enteredReview && buttonClicked && !validated && (
              <Typography variant="body2" color="error">
                Enter your review
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} justifyContent="center" align="center">
            <ReviewRating
              selectedRating={selectedRating}
              handleRatingChange={handleRatingChange}
            />
            {!selectedRating && buttonClicked && !validated && (
              <Typography variant="body2" color="error">
                Select the rating
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} justifyContent="center" align="center">
            <Button
              variant="contained"
              onClick={handleButtonClick}
              style={{
                backgroundColor: "#212529",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={6}
          justifyContent="center"
          align="center"
          spacing={5}
        >
          
          {buttonClicked && validated && (
            <Grid item xs={12}>
              <Paper
                elevation={24}
                sx={{
                  minHeight: "100%",
                  minwidth: "80%",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <Grid item xs={12} justifyContent="center" align="center">
                  <Typography variant="h6" color="green">
                    Your review has been received!
                    
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                >
                  <Grid item xs={6}>
                    <Typography variant="h6" color="black">
                      {storedMovie}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="black">
                      Rating: {storedRating}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} alignItems="flex-start">
                  <Grid item xs={12}>
                    <Typography variant="h7" color="black">
                      {storedTitle}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h8" color="black">
                      {storedReview}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
