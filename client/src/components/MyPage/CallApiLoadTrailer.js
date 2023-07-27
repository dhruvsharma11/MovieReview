async function callApiLoadTrailer(serverURL, data) {
    const url = serverURL + "/api/loadTrailer";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log("Movies: ", body);
    return body;
  }
  
  export default callApiLoadTrailer;