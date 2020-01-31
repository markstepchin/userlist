import React, { useState, useEffect } from "react";
import Users from "./Users";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => setData(json))
        .catch(error => console.log("error: ", error));
    }

    fetchData();
  }, []);

  return (
    <Box mt={5}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item>
          <Users data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
