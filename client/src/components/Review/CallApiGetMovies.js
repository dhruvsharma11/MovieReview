async function callApiGetMovies(serverURL) {
    const url = serverURL + "/api/getMovies";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const body = await response.json();
    let obj = JSON.parse(body.express);
    if (response.status !== 200) throw Error(body.message);
    // console.log("Movies: ", body);
    return obj;
  }
  
  export default callApiGetMovies;
  