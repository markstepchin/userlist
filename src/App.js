import React, { useState, useEffect } from "react";
import Users from "./Users";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => setData(json))
        .catch(error => setError(error));
    }

    fetchData();
    setLoading(false);
  }, []);

  return (
    <Box m={2} mt={5}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item lg={8} xs={12}>
          <Users data={data} loading={loading} error={error} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
