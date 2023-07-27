import React from "react";
import Grid from "@mui/material/Grid";
import MovieTitle from "./MovieTitle";
import ActorName from "./ActorName";
import DirectorName from "./DirectorName";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Search = () => {
  let serverURL = "";

  const [enteredMovie, setEnteredMovie] = React.useState("");
  const [enteredActor, setEnteredActor] = React.useState("");
  const [enteredDirector, setEnteredDirector] = React.useState("");
  const [movieData, setMovieData] = React.useState([]);

  const handleMovieChange = (event) => {
    setEnteredMovie(event.target.value);
  };

  const handleActorChange = (event) => {
    setEnteredActor(event.target.value);
  };

  const handleDirectorChange = (event) => {
    setEnteredDirector(event.target.value);
  };

  const handleSubmitClick = () => {
    callApiFindMovieData().then((res) => {
      // console.log("callApiFindMovieData returned" + res);
      var parsed = JSON.parse(res.express);
      console.log("callApiFindMovieData parsed" + parsed[0]);
      setMovieData(parsed);
    });
  };

  // React.useEffect(() => {
  //   getMovies();
  // }, []);

  const callApiFindMovieData = async () => {
    const url = serverURL + "/api/findMovieData";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enteredMovie: enteredMovie,
        enteredActor: enteredActor,
        enteredDirector: enteredDirector,
      }),
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log("Found Filter: ", body);
    return body;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#CED4DA",
      }}
    >
      <Grid container>
        <Grid
          container
          spacing={2}
          item
          xs={12}
          style={{ paddingLeft: "20px", marginTop: "10px" }}
        >
          <MovieTitle
            enteredMovie={enteredMovie}
            handleMovieChange={handleMovieChange}
          />
          <ActorName
            enteredActor={enteredActor}
            handleActorChange={handleActorChange}
          />
          <DirectorName
            enteredDirector={enteredDirector}
            handleDirectorChange={handleDirectorChange}
          />
        </Grid>

        <Grid item xs={12} style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <Button
            variant="contained"
            onClick={handleSubmitClick}
            style={{
              backgroundColor: "#212529",
            }}
          >
            Submit
          </Button>
        </Grid>
        {/* Movie Data Section */}
        <Grid container item xs={12} spacing={2}>
          {movieData.map((movie) => (
            <Grid item xs={12} key={movie.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h4">Movie Title: {movie.name}</Typography>
                <Typography variant="body1">
                  Movie Director: {movie.director_names}
                </Typography>
                <Typography variant="body1">
                  Review Content: {movie.reviewContent}
                </Typography>
                <Typography variant="body1">
                  Review Average: {movie.reviewAverage}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
