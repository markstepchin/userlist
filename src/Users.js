import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import copyUtil from "./copyUtil";

const TABLE_CLASSNAME = "MuiTable-root";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Users = ({ data, loading }) => {
  const classes = useStyles();

  const [sortDirection, setSortDirection] = useState("asc");
  //tooltip text for the copy button changes to "copied" when click
  const [tooltipText, setTooltipText] = useState("copy");

  return (
    <TableContainer component={Paper}>
      <Box m={2} mt={3}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h5">Users</Typography>
          <Tooltip title={tooltipText}>
            <Button
              onClick={() => {
                const copied = copyUtil(TABLE_CLASSNAME);

                if (copied) {
                  setTooltipText("copied!");
                } else {
                  setTooltipText("error");
                }

                setTimeout(() => setTooltipText("copy"), 3000);
              }}
            >
              <FilterNoneIcon />
            </Button>
          </Tooltip>
        </Box>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
                <TableSortLabel
                  active
                  direction={sortDirection}
                  onClick={() =>
                    sortDirection === "asc"
                      ? setSortDirection("desc")
                      : setSortDirection("asc")
                  }
                ></TableSortLabel>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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

        <Box display="flex" justifyContent="center" m={3}>
          {loading && <CircularProgress />}
        </Box>
      </Box>
    </TableContainer>
  );
};

export default Users;
