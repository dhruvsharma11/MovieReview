import React from "react";
import callApiGetMovies from "../Review/CallApiGetMovies";
import callApiLoadTrailer from "./CallApiLoadTrailer";
import MovieDropdown from "./MovieDropdown";
import InsertTrailer from "./InsertTrailer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";


const backgroundImage =
  "https://coolbackgrounds.io/images/backgrounds/white/white-canyon-6c5d2a4c.jpg";

const MyPage = () => {
  const [movies, setMovies] = React.useState([]); 
  const [movieID, setMovieID] = React.useState(0);
  const [selectedMovie, setSelectedMovie] = React.useState(""); 
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#CED4DA",
            p: 4,
            borderRadius: 4,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center", 
          }}
        >
          {hasTrailer ? (
            <>
              <Typography variant="h4" sx={{ my: 2 }}>
                Watch a movie trailer!
              </Typography>
              <MovieDropdown
                movies={movies}
                selectedMovie={selectedMovie}
                handleSelectionChange={handleSelectionChange}
              />
              <Box sx={{ my: 2 }}>
                <iframe
                  width="600"
                  height="400"
                  src={videoURL}
                  title={movieID}
                  allowFullScreen
                ></iframe>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h4" sx={{ my: 2 }}>
                Enter a movie trailer!
              </Typography>
              <MovieDropdown
                movies={movies}
                selectedMovie={selectedMovie}
                handleSelectionChange={handleSelectionChange}
              />
              <Box sx={{ my: 2 }}>
                <InsertTrailer
                  trailerURL={trailerURL}
                  handleTrailerChange={handleTrailerChange}
                />
              </Box>
              <Box sx={{ my: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleButtonClick}
                  style={{ backgroundColor: "#212529" }}
                >
                  Submit
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default MyPage;
