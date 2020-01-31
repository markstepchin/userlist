import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Users = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Box m={2} mt={3}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h5">Users</Typography>
        </Box>

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* TODO sort */}
            {data
              .sort((a, b) => {
                // multiplying by -1 reverses the order
                const sortOrder = sortDirection === "asc" ? 1 : -1;
                return (a.name > b.name ? 1 : -1) * sortOrder;
              })
              .map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.tags}</TableCell>
                  <TableCell>{user.website}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default Users;
