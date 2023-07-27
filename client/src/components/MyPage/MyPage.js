import React from "react";
import callApiGetMovies from "../Review/CallApiGetMovies";
import callApiLoadTrailer from "./CallApiLoadTrailer";
import MovieDropdown from "./MovieDropdown";
import InsertTrailer from "./InsertTrailer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MyPage = () => {
  const [movies, setMovies] = React.useState([]); //movies is an array of objects, each object is a movie
  const [movieID, setMovieID] = React.useState(0);
  const [selectedMovie, setSelectedMovie] = React.useState(""); //selectedMovie is an object, the selected movie
  const [videoURL, setVideoURL] = React.useState("");
  const [trailerURL, setTrailerURL] = React.useState("");
  const [hasTrailer, setHasTrailer] = React.useState(false);
  const [buttonClicked, setButtonClicked] = React.useState(false);

  let serverURL = "";

  const handleSelectionChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleTrailerChange = (event) => {
    setTrailerURL(event.target.value);
  };

  React.useEffect(
    () => {
      getMovies();
    },
    [],
    [buttonClicked]
  );

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
      setVideoURL(chosenMovie.movie_trailers);
    }
  };

  const embedURL = () => {
    return trailerURL.replace("watch?v=", "embed/");
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    const data = {
      embedURL: embedURL(),
      movieID: movieID,
    };
    callApiLoadTrailer(serverURL, data);
    setTrailerURL("");
  };

  React.useEffect(() => {
    if (videoURL) {
      setHasTrailer(true);
    } else {
      setHasTrailer(false);
    }
  }, [selectedMovie, videoURL]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CED4DA",
      }}
    >
      {/* Center the content vertically and horizontally */}

      {/* Embed the YouTube video player */}
      {hasTrailer ? (
        <Box my={2}>
          <Typography variant="h4">Watch a movie trailer!</Typography>
          <MovieDropdown
            movies={movies}
            selectedMovie={selectedMovie}
            handleSelectionChange={handleSelectionChange}
          />
          <Box my={2}>
            <iframe
              width="600"
              height="400"
              src={videoURL}
              title={movieID}
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      ) : (
        <Box my={2}>
          <Typography variant="h4">Enter a movie trailer!</Typography>
          <MovieDropdown
            movies={movies}
            selectedMovie={selectedMovie}
            handleSelectionChange={handleSelectionChange}
          />
          <Box my={2}>
            <InsertTrailer
              trailerURL={trailerURL}
              handleTrailerChange={handleTrailerChange}
            />
          </Box>
          <Box my={2}>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              style={{
                backgroundColor: "#212529",
              }}
            >
              Submit
            </Button>
            <Typography variant="h6" color="green">
               Your trailer submission has been received!  
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MyPage;
